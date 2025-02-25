import React from "react";

const ChartTooltip = ({ active, payload, label }: any) => {
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

export default ChartTooltip;
