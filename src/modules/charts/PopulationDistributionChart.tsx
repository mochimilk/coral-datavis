import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Body1Strong, ToggleButton } from "@fluentui/react-components";
import { Star } from "../../imports/bundleicons";
import './charts.css'

// Custom Tooltip (Ensures clean formatting)
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div
      style={{
        backgroundColor: "var(--colorNeutralBackgroundAlpha2)",
        backdropFilter: "saturate(180%) blur(16px)",
        padding: "8px 12px",
        borderRadius: "6px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        color: "var(--colorNeutralForeground1)",
      }}
    >
      {payload.map((entry: any, index: number) => (
        <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: entry.color,
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          <span>{entry.name}: {entry.value}</span>
        </div>
      ))}
    </div>
  );
};

interface PopulationDistributionChartProps {
  selectedItems: Record<string, boolean>;
}

// Define age groups
const allAgeGroups = ["0-18", "19-30", "31-45", "46-60", "60+"];

const PopulationDistributionChart: React.FC<PopulationDistributionChartProps> = ({ selectedItems }) => {
  // Helper function to determine if an age group is selected
  const isSelected = (id: string) => {
    const hasSelection = allAgeGroups.some((group) => selectedItems[group]);
    return hasSelection ? selectedItems[id] ?? false : true; // Show all if none selected
  };

  // Filtered Data
  const ageDistribution = [
    { ageGroup: "0-18", population: 500, id: "0-18" },
    { ageGroup: "19-30", population: 450, id: "19-30" },
    { ageGroup: "31-45", population: 350, id: "31-45" },
    { ageGroup: "46-60", population: 280, id: "46-60" },
    { ageGroup: "60+", population: 150, id: "60+" },
  ].filter((d) => isSelected(d.id));

  return (
    <div className="chartContainer">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Body1Strong>Population Distribution by Age Group</Body1Strong>
        <ToggleButton appearance="subtle" icon={<Star />} />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          margin={{ top: 24, right: 24, left: -24, bottom: 0 }}
          data={ageDistribution}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--colorNeutralStroke2)" vertical={false} />
          <XAxis dataKey="ageGroup" />
          <YAxis />
          <Tooltip cursor={false} content={<CustomTooltip />} />
          <Bar dataKey="population" fill="var(--colorBrandForeground1)" radius={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationDistributionChart;
