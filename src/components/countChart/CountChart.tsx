"use client";
import styled from "../../styles/allStyles/countChart.module.css";

import { DotsThree } from "@phosphor-icons/react";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const styledItem = {
  width: "20px",
  height: "20px",
  borderRadius: "9999px",
  backgroundColor: "var(--backgroung)",
};

const styledItemGirl = {
  width: "20px",
  height: "20px",
  borderRadius: "9999px",
  backgroundColor: "var(--background-hover)",
};

const data = [
  {
    name: "Total",
    count: 53,
    fill: "white",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#001ea6",
  },
  {
    name: "Boys",
    count: 43,
    fill: "#4762ff",
  },
];

export default function CountChart() {
  return (
    <div className={styled.container}>
      <div className={styled.title}>
        <h1>Students</h1>
        <DotsThree size={22} />
      </div>
      <div className={styled.graphic}>
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className={styled.description}>
        <div className={styled.session}>
          <div style={styledItem} />
          <h1 className={styled.number}>1,234</h1>
          <h2 className={styled.gender}>Boys (45%)</h2>
        </div>
        <div className={styled.session}>
          <div style={styledItemGirl} />
          <h1 className={styled.number}>2,234</h1>
          <h2 className={styled.gender}>Girls (55%)</h2>
        </div>
      </div>
    </div>
  );
}
