import React, { useState, useEffect } from "react";
import { Button, Title2 } from "@fluentui/react-components";
import { ArrowExport20Regular } from "@fluentui/react-icons";
import AgeDistributionChart from "./charts/AgeDistributionChart";
import PopulationDistributionChart from "./charts/PopulationDistributionChart";
import PopulationGrowthChart from "./charts/PopulationGrowthChart";

interface DashboardProps {
  selectedItems: Record<string, boolean>;
  selectedDateRange: string;
}

const Dashboard: React.FC<DashboardProps> = ({
  selectedItems,
  selectedDateRange,
}) => {
  const [greeting, setGreeting] = useState("");

  // Styles
  const dashboardStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto auto",
    gap: "16px",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    minHeight: "512px",
  };

  const secondRowStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Two columns for bar charts
    gap: "16px",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    minHeight: "384px",
  };

  useEffect(() => {
    const getGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        return "Good morning, Pepper ☀️";
      } else if (currentHour >= 12 && currentHour < 18) {
        return "Good afternoon, Pepper 🌤️";
      } else {
        return "Good evening, Pepper 🌙";
      }
    };

    setGreeting(getGreeting());
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "0px 16px 16px 16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: " 32px 16px 16px 16px",
        }}
      >
        <Title2>{greeting}</Title2>
        <Button icon={<ArrowExport20Regular />}>Export</Button>
      </div>
      <br />

      <div style={dashboardStyle}>
        {/* Population Growth Trends */}
        <PopulationGrowthChart selectedDateRange={selectedDateRange} />
      </div>

      <div style={secondRowStyle}>
        {/* Population Distribution by Age */}
        <PopulationDistributionChart selectedItems={selectedItems} />

        {/* Age Distribution Across Locations (Stacked) */}
        <AgeDistributionChart selectedItems={selectedItems} />
      </div>
    </div>
  );
};

export default Dashboard;
