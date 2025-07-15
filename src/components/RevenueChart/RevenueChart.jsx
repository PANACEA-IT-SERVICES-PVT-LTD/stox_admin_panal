import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Rectangle,
} from "recharts";

const RevenueChart = ({ data, xKey, yKey }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const bars = [];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        barSize={50}
        onMouseLeave={() => setActiveIndex(null)}
      >
        {/* Stripe pattern definition */}
        <defs>
          <pattern
            id="linePattern"
            patternUnits="userSpaceOnUse"
            width={8}
            height={8}
            patternTransform="rotate(45)"
          >
            <line x1="0" y="0" x2="0" y2="8" stroke="#ad7b17" strokeWidth="2" />
          </pattern>
        </defs>

        {/* Grid and axes */}
        <CartesianGrid
          vertical={false}
          strokeDasharray="3 3"
          stroke="rgba(255, 255, 255, 0.1)" // 👈 low-opacity white
        />

        <XAxis dataKey={xKey} stroke="#ccc" />
        <YAxis
          stroke="#ccc"
          tickFormatter={(value) =>
            value >= 10000000
              ? `${value / 10000000} Cr`
              : value >= 100000
              ? `${value / 100000} L`
              : value >= 1000
              ? `${value / 1000}k`
              : value
          }
        />

        {/* Tooltip */}
        <Tooltip
          formatter={(value) => [`${value} INR`, "Amount"]}
          contentStyle={{
            backgroundColor: "#1a1f1f",
            borderRadius: "10px",
            border: "1px solid #444",
          }}
          labelStyle={{ color: "#fff", fontWeight: 500 }}
          itemStyle={{ color: "#bbb" }}
          cursor={{ fill: "transparent" }}
        />

        {/* Bars */}
        <Bar
          dataKey={yKey}
          shape={(props) => {
            const { x, y, width, height, index } = props;
            const isActive = index === activeIndex;

            return (
              <>
                {/* Bar itself */}
                <Rectangle
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  radius={[20, 20, 0, 0]}
                  fill={isActive ? "#ad7b17" : "url(#linePattern)"}
                  onMouseEnter={() => setActiveIndex(index)}
                />

                {/* Top ring indicator */}
                {isActive && (
                  <circle
                    cx={x + width / 2}
                    cy={y}
                    r={10} // Inner radius
                    fill="#111b1b" // Fill same as background to "cut out"
                    stroke="white"
                    strokeWidth={6}
                    style={{ filter: "drop-shadow(0 0 4px white)" }}
                  />
                )}
              </>
            );
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RevenueChart;
