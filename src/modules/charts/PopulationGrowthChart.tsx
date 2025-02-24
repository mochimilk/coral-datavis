import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ReferenceLine,
} from "recharts";
import { Body1Strong, ToggleButton } from "@fluentui/react-components";
import { Star } from "../../imports/bundleicons";

// Custom Tooltip
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
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: entry.color,
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          <span>
            {entry.name}: {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

interface PopulationGrowthChartProps {
  selectedDateRange: string;
}

const PopulationGrowthChart: React.FC<PopulationGrowthChartProps> = ({
  selectedDateRange,
}) => {
  const [populationGrowth, setPopulationGrowth] = useState([]);

  // Function to calculate median value across dataset
  const calculateMedian = (data: any[], keys: string[]) => {
    const allValues = data.flatMap((entry) =>
      keys.map((key) => entry[key]).filter((value) => value !== undefined)
    );

    if (allValues.length === 0) return null;

    allValues.sort((a, b) => a - b);
    const mid = Math.floor(allValues.length / 2);

    return allValues.length % 2 !== 0
      ? allValues[mid]
      : (allValues[mid - 1] + allValues[mid]) / 2;
  };

  // Fetch data based on selected date range
  useEffect(() => {
    console.log("Fetching data for:", selectedDateRange);

    const today = new Date();
    let data = [];

    switch (selectedDateRange) {
      case "past_7_days":
        for (let i = 6; i >= 0; i--) {
          const date = new Date();
          date.setDate(today.getDate() - i);
          data.push({
            label: date.toLocaleDateString("en-US", { weekday: "short" }),
            "0-18": Math.floor(Math.random() * 100) + 100,
            "19-30": Math.floor(Math.random() * 100) + 150,
            "31-45": Math.floor(Math.random() * 100) + 200,
          });
        }
        break;
      case "past_14_days":
        for (let i = 12; i >= 0; i -= 2) {
          const date = new Date();
          date.setDate(today.getDate() - i);
          data.push({
            label: date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
            "0-18": Math.floor(Math.random() * 100) + 100,
            "19-30": Math.floor(Math.random() * 100) + 150,
            "31-45": Math.floor(Math.random() * 100) + 200,
          });
        }
        break;
      case "past_30_days":
        for (let i = 27; i >= 0; i -= 3) {
          const date = new Date();
          date.setDate(today.getDate() - i);
          data.push({
            label: date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
            "0-18": Math.floor(Math.random() * 100) + 100,
            "19-30": Math.floor(Math.random() * 100) + 150,
            "31-45": Math.floor(Math.random() * 100) + 200,
          });
        }
        break;
      case "year_to_date":
        for (let i = 0; i < 12; i++) {
          const date = new Date(today.getFullYear(), i, 1);
          data.push({
            label: date.toLocaleDateString("en-US", { month: "short" }),
            "0-18": Math.floor(Math.random() * 100) + 100,
            "19-30": Math.floor(Math.random() * 100) + 150,
            "31-45": Math.floor(Math.random() * 100) + 200,
          });
        }
        break;
      case "all":
        for (let i = 5; i >= 0; i--) {
          const year = today.getFullYear() - i;
          data.push({
            label: year.toString(),
            "0-18": Math.floor(Math.random() * 100) + 100,
            "19-30": Math.floor(Math.random() * 100) + 150,
            "31-45": Math.floor(Math.random() * 100) + 200,
          });
        }
        break;
      default:
        data = [];
    }

    setPopulationGrowth(data);
  }, [selectedDateRange]);

  // Calculate median value
  const medianValue = calculateMedian(populationGrowth, [
    "0-18",
    "19-30",
    "31-45",
  ]);

  return (
    <div className="chartContainer">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Body1Strong>Population Growth Trends by Age</Body1Strong>
        <ToggleButton appearance="subtle" icon={<Star />} />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          margin={{ top: 24, right: 24, left: -24, bottom: 0 }}
          data={populationGrowth}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--colorNeutralStroke2)"
            horizontal={false}
          />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />

          {/* Median Reference Line */}
          {medianValue !== null && (
            <ReferenceLine
              y={medianValue}
              stroke="var(--colorNeutralForeground1)"
              strokeDasharray="5 5"
              strokeWidth={1.5}
              label={{
                position: "insideTopRight",
                fill: "var(--colorNeutralForeground4)",
              }}
            />
          )}

          <Line
            type="monotone"
            dataKey="0-18"
            stroke="var(--colorBrandForeground1)"
            strokeWidth={1.5}
          />
          <Line
            type="monotone"
            dataKey="19-30"
            stroke="var(--colorPaletteLavenderForeground2)"
            strokeWidth={1.5}
          />
          <Line
            type="monotone"
            dataKey="31-45"
            stroke="var(--colorPaletteSeafoamForeground2)"
            strokeWidth={1.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationGrowthChart;
