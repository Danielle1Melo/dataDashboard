"use client";
import styled from "../../styles/allStyles/financeChart.module.css";
import { DotsThree } from "@phosphor-icons/react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 2210,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 2290,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 2000,
  },
  {
    name: "May",
    income: 1890,
    expense: 2181,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 2500,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 2100,
  },
  {
    name: "Aug",
    income: 3490,
    expense: 2100,
  },
  {
    name: "Sep",
    income: 3490,
    expense: 2100,
  },
  {
    name: "Oct",
    income: 3490,
    expense: 2100,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 2100,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 2100,
  },
];

export default function FinanceChart() {
  return (
    <div className={styled.container}>
      <div className={styled.title}>
        <h1>Finance</h1>
        <DotsThree size={22} />
      </div>
      <ResponsiveContainer width="100%" height="95%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} tickMargin={10}/>
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#001ea6"
            strokeWidth={3}
          />
          <Line type="monotone" dataKey="expense" stroke="#4762ff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
