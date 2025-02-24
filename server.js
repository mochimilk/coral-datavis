import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { DefaultAzureCredential } from "@azure/identity";
import https from "https";

dotenv.config();

console.log("Loaded OpenAI API Key:", process.env.OPENAI_API_KEY ? "Exists ✅" : "MISSING ❌");

const app = express();
app.use(express.json());
app.use(cors());

async function getAzureADToken() {
  const credential = new DefaultAzureCredential();
  const tokenResponse = await credential.getToken("https://cognitiveservices.azure.com/.default");
  return tokenResponse.token;
}

// Create an HTTPS agent with keepAlive and timeout settings
const agent = new https.Agent({
  keepAlive: true,
  keepAliveMsecs: 30000, // 30 seconds
  timeout: 20000, // 20 seconds overall timeout
});

const conversationHistories = {}; // Temporary conversation history

app.post("/chat", async (req, res) => {
  console.log("Incoming Request Body:", req.body);

  let { messages, apiKey, deploymentName, isAzureFoundry, userId } = req.body;
  if (!userId) return res.status(400).json({ error: "User ID is required" });

  let apiUrl;
  if (process.env.USE_AZURE === "true") {
    apiUrl = `https://${process.env.AZURE_OPENAI_RESOURCE}.openai.azure.com/openai/deployments/${process.env.AZURE_DEPLOYMENT_NAME}/chat/completions?api-version=2024-02-15-preview`;
  } else {
    apiUrl = "https://api.openai.com/v1/chat/completions";
  }
  if (!apiKey) {
    apiKey = process.env.USE_AZURE === "true" ? process.env.AZURE_API_KEY : process.env.OPENAI_API_KEY;
  }

  console.log("API Key Sent in Header:", apiKey ? `Bearer ${apiKey.substring(0, 5)}...HIDDEN` : "MISSING ❌");
  console.log("API URL (defaulted):", apiUrl);

  if (!apiUrl.includes("openai.com") && !apiUrl.includes("azure.com")) {
    return res.status(400).json({ error: "Unsupported API provider" });
  }
  if (!apiKey) {
    console.error("❌ Missing API Key!");
    return res.status(401).json({ error: "Missing API key." });
  }

  if (!conversationHistories[userId]) conversationHistories[userId] = [];
  conversationHistories[userId].push(...messages);

  try {
    // Set headers and body
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    let headers = { Authorization: `Bearer ${apiKey}` };
    let body = { messages: conversationHistories[userId], stream: true };

    if (isAzureFoundry) {
      const token = await getAzureADToken();
      headers = { Authorization: `Bearer ${token}` };
      body = {
        model: deploymentName,
        inputs: conversationHistories[userId].map(msg => msg.content),
        stream: true,
      };
    } else if (apiUrl.includes("azure.com")) {
      headers = { "api-key": apiKey };
      body = { deployment: deploymentName, messages: conversationHistories[userId], stream: true };
    } else if (apiUrl.includes("openai.com")) {
      headers = { Authorization: `Bearer ${apiKey}` };
      body = { model: "gpt-4o-mini", messages: conversationHistories[userId], stream: true };
    }

    console.log("Sending request to API...");
    console.log("DEBUG Headers:", headers);
    console.log("DEBUG Body:", JSON.stringify(body, null, 2));

    // Send request with custom HTTPS agent and optional heartbeat
    const response = await axios.post(apiUrl, body, { headers, responseType: "stream", httpsAgent: agent });

    // Optional heartbeat: send a space every 15 seconds to keep connection alive
    const heartbeat = setInterval(() => {
      res.write(" ");
    }, 15000);

    let fullMessage = "";
    response.data.on("data", (chunk) => {
      const text = chunk.toString();
      fullMessage += text;
      res.write(text);
    });

    response.data.on("end", () => {
      clearInterval(heartbeat);
      conversationHistories[userId].push({ role: "assistant", content: fullMessage });
      res.end();
    });

  } catch (error) {
    console.error("❌ Streaming error:", error);
    let errorMessage = "Streaming failed. Please try again.";
    if (error.response) {
      const statusCode = error.response.status;
      console.error("API Response Error:", error.response.data);
      if (statusCode === 401 || statusCode === 403) {
        errorMessage = "Unauthorized access. Check your API key or permissions.";
      } else if (statusCode === 404) {
        errorMessage = "API endpoint not found. Please verify the URL.";
      } else if (statusCode === 500) {
        errorMessage = "Server error. The AI service may be down.";
      } else {
        errorMessage = `Unexpected error (Status ${statusCode}). Please try again.`;
      }
    } else if (error.message.includes("ECONNREFUSED")) {
      errorMessage = "Could not connect to API. Check your internet or API server.";
    }
    res.status(500).json({ error: errorMessage });
  }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
