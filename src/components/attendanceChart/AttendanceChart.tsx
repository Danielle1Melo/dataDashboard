"use client";
import { DotsThree } from "@phosphor-icons/react";
import styled from "../../styles/allStyles/attendanceChart.module.css";
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend, DefaultTooltipContent } from "recharts";


const data = [
  {
    name: "Mon",
    present: 40,
    absent: 60,
  },
  {
    name: "Tue",
    present: 70,
    absent: 68,
  },
  {
    name: "Wed",
    present: 20,
    absent: 10,
  },
  {
    name: "Thu",
    present: 80,
    absent: 8,
  },    
  {
    name: "Fri",
    present: 90,
    absent: 5 ,
  },
];

export default function AttendanceChart() {
  return(
    <div className={styled.container}>
        <div className={styled.title}>
        <h1>Attendance</h1>
        <DotsThree size={22} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <DefaultTooltipContent
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#001ea6"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#4762ff"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
