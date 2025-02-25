import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./chat.css";
import { Body1, Button, Tag, tokens, Tooltip as FluentTooltip } from "@fluentui/react-components";
import { SendRegular, CopyRegular, HeartRegular } from "@fluentui/react-icons";
import { Copy, Send, TreeDeciduous } from "../../imports/bundleicons";
import rehypePrism from "rehype-prism";
import "./prism-material-oceanic.css";

interface ChatProps {
  apiUrl: string;
  apiKey?: string;
  deploymentName?: string;
  isAzureFoundry?: boolean;
  userId: string;
  onSaveMessage?: (userId: string, messages: { role: string; content: string }[]) => void;
  onLoadHistory?: (userId: string) => Promise<{ role: string; content: string }[]>;
  onClearHistory?: (userId: string) => void;
}

const Chat: React.FC<ChatProps> = ({
  apiUrl,
  apiKey,
  deploymentName,
  isAzureFoundry = false,
  userId,
  onSaveMessage,
  onLoadHistory,
  onClearHistory,
}) => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [inputHeight, setInputHeight] = useState(0);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const inputContainerRef = useRef<HTMLDivElement | null>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    } else if (onLoadHistory) {
      onLoadHistory(userId)
        .then((history) => {
          if (history) setMessages(history);
        })
        .catch((err) => setError("Failed to load chat history."));
    }
  }, [onLoadHistory, userId]);

  // Persist messages in localStorage whenever they update
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      setShowScrollButton(false);
    }
  }, [messages]);

  // Listen to scroll events on messages container to toggle scroll button visibility
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight < scrollHeight - 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Update input container height when it changes
  useEffect(() => {
    if (inputContainerRef.current) {
      setInputHeight(inputContainerRef.current.offsetHeight);
    }
  }, [isFocused, input]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({ top: messagesContainerRef.current.scrollHeight, behavior: "smooth" });
      setShowScrollButton(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => console.log("Response copied to clipboard!"))
      .catch(err => console.error("Failed to copy text:", err));
  };

  const handleLike = (text: string) => {
    console.log("Heart clicked for response:", text);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    setError(null);
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    console.log("🔍 DEBUG: Sending API Key to backend:", apiKey ? `Bearer ${apiKey.substring(0, 5)}...HIDDEN` : "MISSING ❌");
    console.log("🔍 DEBUG: Sending request body:", JSON.stringify(newMessages, null, 2));

    setIsTyping(true);

    try {
      const response = await fetch(`${apiUrl}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, apiUrl, apiKey, deploymentName, isAzureFoundry, userId }),
      });

      if (!response.body) throw new Error("No response body received.");

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let partialMessage = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunkText = decoder.decode(value);
        const lines = chunkText.split("\n").filter(line => line.trim() !== "");
        for (const line of lines) {
          if (line.trim() === "[DONE]") break;
          const jsonStr = line.startsWith("data:") ? line.substring("data:".length).trim() : line;
          try {
            const parsed = JSON.parse(jsonStr);
            if (parsed.choices && parsed.choices[0]?.delta?.content) {
              partialMessage += parsed.choices[0].delta.content;
            }
          } catch (e) {
            console.error("Error parsing chunk", e);
          }
        }
        setMessages([...newMessages, { role: "assistant", content: partialMessage }]);
      }

      if (onSaveMessage) {
        onSaveMessage(userId, [...newMessages, { role: "assistant", content: partialMessage }]);
      }
    } catch (err: any) {
      console.error("Chat API Error:", err);
      let friendlyErrorMessage = "Uh-oh! Something went wrong. Try again in a moment. 🤖";
      if (err.message.includes("Failed to fetch")) {
        friendlyErrorMessage = "Hmm... I can't seem to connect to the server. Check your internet and try again! 🌐";
      } else if (err.message.includes("No response body received")) {
        friendlyErrorMessage = "The server didn't send me anything back. Maybe it's taking a coffee break? ☕";
      } else if (err.message.includes("500")) {
        friendlyErrorMessage = "Looks like the server is having an issue. Maybe it's a bad day for AI? 😵‍💫";
      } else if (err.message.includes("401") || err.message.includes("403")) {
        friendlyErrorMessage = "I can't access the API. It might be a permissions issue! 🔐";
      } else if (err.message.includes("404")) {
        friendlyErrorMessage = "I tried to find something, but it wasn't there! Maybe the API endpoint moved? 🔍";
      }
      setMessages(prevMessages => [
        ...prevMessages,
        { role: "assistant", content: friendlyErrorMessage }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem("chatMessages");
    if (onClearHistory) onClearHistory(userId);
  };

  return (
    <div className="chat-container" style={{ position: "relative" }}>
      <div className="messages" ref={messagesContainerRef}>
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <Body1>
              <div style={{ display: "flex", flexDirection: "column", whiteSpace: "pre-wrap", width: "100%" }}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypePrism]}
                >
                  {msg.content}
                </ReactMarkdown>
                {msg.role === "assistant" && (
                  <div className="assistant-footer">
                    <div className="assistant-actions">
                      <Button onClick={() => handleCopy(msg.content)} title="Copy Response" appearance="subtle" style={{ height: "28px", width: "28px" }} icon={<Copy />} />
                      <Button onClick={() => handleLike(msg.content)} title="Like" appearance="subtle" style={{ height: "28px", width: "28px" }} icon={<HeartRegular />} />
                    </div>

                  </div>
                )}
              </div>
            </Body1>
          </div>
        ))}
      </div>

      {showScrollButton && (
        <Tag
          onClick={scrollToBottom}
          className="scroll-to-bottom"
          shape="circular"
          style={{
            bottom: inputHeight, // Adjust extra space here
            backgroundColor: "var(--colorNeutralBackgroundAlpha2)",
            backdropFilter: "saturate(180%) blur(16px)",
          }}
        >
          Back to bottom
        </Tag>
      )}

      <div className={`input-wrapper ${isFocused ? "focused" : ""}`} ref={inputContainerRef}>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (textareaRef.current) {
              textareaRef.current.style.height = "auto";
              textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Type a message..."
          rows={1}
          className="input-field"
        />

        <div style={{display: 'flex',
          alignItems:'center',
          // width: '100%',
          // flex: 1,
          justifyContent:'space-between'
        }}>
        <FluentTooltip content="AI-generated content may be incorrect." relationship="label">
                      <Tag appearance="filled" size="small">AI Generated</Tag>
                    </FluentTooltip>
          <Button appearance="transparent" onClick={sendMessage} icon={<Send />} />
        </div>
        <span className="focus-indicator" />
      </div>

      {onClearHistory && <button onClick={clearChat}>Clear Chat</button>}
    </div>
  );
};

export default Chat;
