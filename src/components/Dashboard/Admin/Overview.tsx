"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total:50 ,
  },
  {
    name: "Feb",
    total:234 ,
  },
  {
    name: "Mar",
    total: 112,
  },
  {
    name: "Apr",
    total:43 ,
  },
  {
    name: "May",
    total:78 ,
  },
  {
    name: "Jun",
    total:59 ,
  },
  {
    name: "Jul",
    total: 98,
  },
  {
    name: "Aug",
    total: 77,
  },
  {
    name: "Sep",
    total: 67,
  },
  {
    name: "Oct",
    total:59 ,
  },
  {
    name: "Nov",
    total: 128,
  },
  {
    name: "Dec",
    total:38 ,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
