import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { Body1Strong, ToggleButton, Title3 } from "@fluentui/react-components";
import { Star } from "../../imports/bundleicons";
import ChartTooltip from "./ChartTooltip";

interface AgeDistributionChartProps {
  selectedItems: Record<string, boolean>;
}





// Define Locations
const allLocations = [
  "new_york",
  "los_angeles",
  "chicago",
  "houston",
  "san_francisco",
];

const AgeDistributionChart: React.FC<AgeDistributionChartProps> = ({
  selectedItems,
}) => {
  // Map of full location names to their short versions
  const locationShortNames: Record<string, string> = {
    new_york: "NY",
    los_angeles: "LA",
    chicago: "CHI",
    houston: "HOU",
    san_francisco: "SF",
  };

  // Get selected locations
  const selectedLocations = allLocations
    .filter((loc) => selectedItems[loc]) // Check if selected
    .map((loc) => locationShortNames[loc]); // Convert to short form

  // Display selected locations or "All"
  const selectedLocationsText =
    selectedLocations.length > 0 ? selectedLocations.join(" / ") : "All";

  // Filtered Data
  const locationAgeData = [
    {
      location: "New York",
      "0-18": 100,
      gap: 6,
      "19-30": 80,
      "31-45": 60,
      id: "new_york",
    },
    {
      location: "Los Angeles",
      "0-18": 90,
      gap: 6,
      "19-30": 70,
      "31-45": 50,
      id: "los_angeles",
    },
    {
      location: "Chicago",
      "0-18": 70,
      gap: 6,
      "19-30": 60,
      "31-45": 40,
      id: "chicago",
    },
    {
      location: "Houston",
      "0-18": 80,
      gap: 6,
      "19-30": 75,
      "31-45": 55,
      id: "houston",
    },
    {
      location: "San Francisco",
      "0-18": 60,
      gap: 6,
      "19-30": 50,
      "31-45": 30,
      id: "san_francisco",
    },
  ].filter((d) => selectedLocations.length === 0 || selectedItems[d.id]);

  return (
    <div className="chartContainer">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Body1Strong>Age Distribution Across Locations</Body1Strong>
        <ToggleButton appearance="subtle" icon={<Star />} />
      </div>

      {/* Selected Locations Display */}
      <div style={{ margin: "12px 0 12px 0" }}>
        <Title3>{selectedLocationsText}</Title3>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={locationAgeData}
          stackOffset="sign"
          margin={{ top: 24, right: 24, left: -24, bottom: 0 }}
        >
          <defs>
            <pattern
              id="diagonalLines"
              patternUnits="userSpaceOnUse"
              width="8"
              height="8"
            >
              <path
                d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4"
                stroke="var(--colorPaletteSeafoamForeground2)"
                strokeWidth="1.2"
              />
            </pattern>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--colorNeutralStroke2)"
            vertical={false}
          />
          <XAxis dataKey="location" />
          <YAxis />
          <Tooltip cursor={false} content={<ChartTooltip />} />
          <Legend />

          {/* Stacked Bars */}
          <Bar
            dataKey="0-18"
            stackId="a"
            fill="var(--colorBrandForeground1)"
            radius={8}
          />
          <Bar dataKey="gap" stackId="a" fill="transparent" />
          <Bar
            dataKey="19-30"
            stackId="a"
            fill="var(--colorPaletteLavenderForeground2)"
            radius={8}
          />
          <Bar dataKey="gap" stackId="a" fill="transparent" />

          {/* Diagonal Pattern */}
          <Bar
            dataKey="31-45"
            stackId="a"
            fill="url(#diagonalLines)"
            radius={8}
          />

          {/* Invisible Bar for Tooltip */}
          <Bar
            dataKey="31-45"
            stackId="a"
            fill="var(--colorPaletteSeafoamForeground2)"
            opacity={0}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AgeDistributionChart;
