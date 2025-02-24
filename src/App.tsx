import React, { useEffect, useState } from "react";
import PanelRight from "./components/Panels/PanelRight.js";
import {
  Avatar,
  Button,
  ToggleButton,
  ToolbarDivider,
} from "@fluentui/react-components";
import {
  DocumentSparkle20Filled,
  MoreHorizontalRegular,
  Sparkle20Filled,
} from "@fluentui/react-icons";
import Header from "./components/Header/Header.js";
import PanelRightToolbar from "./components/Panels/PanelRightToolbar.js";
import "./index.css";
import Content from "./components/Content/Content.js";
import { DocumentSparkle, Sparkle } from "./imports/bundleicons.js";
import HeaderTools from "./components/Header/HeaderTools.js";
import PanelRightToggles from "./components/Header/PanelRightToggles.js";
import PanelLeftSearch from "./modules/PanelLeftSearch.js";
import Dashboard from "./modules/Dashboard.js"; // <-- Import the dashboard
import Chat from "./modules/chat/chat";
// import {
//   saveChatHistory,
//   loadChatHistory,
//   clearChatHistory,
// } from "./modules/chat/PostgreSQL/chatHistory";




const App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    {}
  );
  const [selectedDateRange, setSelectedDateRange] =
    useState<string>("past_7_days"); // ✅ Added state

  // Apply or remove the "dark-mode" class on the body element based on isDarkMode



  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "var(--colorNeutralBackground3)",
      }}
    >
      {/* Header */}
      <Header subtitle="Coral">
        <HeaderTools>
          <Avatar />
          <ToolbarDivider />
          <PanelRightToggles>
            <ToggleButton appearance="subtle" icon={<Sparkle />} />
            <ToggleButton appearance="subtle" icon={<DocumentSparkle />} />
          </PanelRightToggles>
        </HeaderTools>
      </Header>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Left Panel */}
        <div style={{ flexShrink: 0, display: "flex", overflow: "hidden" }}>
          {/* ✅ Pass setSelectedDateRange to PanelLeftSearch */}
          <PanelLeftSearch
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            setSelectedDateRange={setSelectedDateRange} // ✅ Ensure this is passed
          />
        </div>

        {/* Main Content with Dashboard */}
        <Content>
          <div>
            {/* ✅ Pass selectedDateRange to Dashboard */}
            <Dashboard
              selectedItems={selectedItems}
              selectedDateRange={selectedDateRange}
            />
          </div>
        </Content>

        {/* Right Panels */}
        <PanelRight panelWidth={384} panelResize={true} panelType="first">
          <PanelRightToolbar
            panelTitle="Copilot"
            panelIcon={<Sparkle20Filled />}
          >
            <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
          </PanelRightToolbar>
          <Chat
            apiUrl="http://localhost:5000"// Ensure this is correct
            apiKey="" // API Key (only needed for OpenAI & Azure OpenAI)
            // deploymentName="my-deployment" // Only needed for Azure OpenAI & Foundry
            isAzureFoundry={false} // Flag for Azure AI Foundry
            userId="user123" // Unique user ID (for multi-turn memory)
          // onSaveMessage={saveChatHistory} // Callback to save chat history
          // onLoadHistory={loadChatHistory} // Callback to load chat history
          // onClearHistory={clearChatHistory} // Callback to clear chat history
          />
        </PanelRight>

        <PanelRight panelResize={true} panelType="second">
          <PanelRightToolbar
            panelTitle="Documents"
            panelIcon={<DocumentSparkle20Filled />}
          >
            <Button appearance="subtle" icon={<MoreHorizontalRegular />} />
          </PanelRightToolbar>
          <div style={{ padding: "0 16px 16px 16px" }}>
            <p>This is the content inside the second panel.</p>
          </div>
        </PanelRight>
      </div>
    </div>
  );
};

export default App;
