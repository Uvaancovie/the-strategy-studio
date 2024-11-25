"use client";

import { Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

const chartData = [
  { skill: "Analytical Skills", experiences: 4 },
  { skill: "Strategic Thinking", experiences: 4 },
  { skill: "Strategic Planning", experiences: 4 },
  { skill: "Financial Variance Analysis", experiences: 4 },
  { skill: "Financial Modeling", experiences: 4 },
  { skill: "Commercial Management", experiences: 3 },
];

export function SkillsChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-center mb-4">Key Skills & Experience</h3>
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 40, // Adjusted margin for X-axis label
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="skill"
          tick={{ fontSize: 12 }}
          interval={0}
          angle={-30}
          textAnchor="end"
          label={{
            value: "Skills",
            position: "insideBottom",
            offset: -5,
            style: { fontSize: "14px", fill: "#555" },
          }}
        />
        <YAxis
          label={{
            value: "Number of Experiences",
            angle: -90,
            position: "insideLeft",
            style: { fontSize: "14px", fill: "#555" },
          }}
        />
        <Tooltip />
        <Legend />
        {/* Bar with experiences */}
        <Bar
          dataKey="experiences"
          fill="#2563eb"
          radius={[4, 4, 0, 0]} // Rounded corners for the bar
        />
      </BarChart>
    </div>
  );
}
