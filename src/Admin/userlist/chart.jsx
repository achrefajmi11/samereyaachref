import "./chart.css"
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  
  YAxis,
  Legend,
  
  Bar,
  ResponsiveContainer,
} from "recharts";
import React from 'react';
const data = [
  { name: "January", Total: 12 },
  { name: "February", Total: 21 },
  { name: "March", Total: 8 },
  { name: "April", Total: 16 },
  { name: "May", Total: 9 },
  { name: "June", Total: 17 },
];

const data1 = [
  { name: "INFORMATIQUE", nombretravailleurs: 200 },
  { name: "RH", nombretravailleurs: 150 },
  { name: "OMBALLAGE", nombretravailleurs: 300 },
  { name: "PLASTIFICATION", nombretravailleurs: 500},
];

const Chart = ({ aspect, title , title1 }) => {
  return (

    <div className="chart">
     <div className="title">{title1}</div>
        <BarChart
        
          width={1200}
          height={300}
          data={data1}
          
          margin={{ top: 100, right: 400, left: 30, bottom: 10 }}
          barSize={30}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left:40, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="nombretravailleurs" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
        <div className="title">{title}</div>
        <ResponsiveContainer width="90%" aspect={aspect}>
      
      <AreaChart
      
        width={100}
        height={100}
        data={data}
        margin={{ top: 100, right: 90, left: 170, bottom: 0 }}
      >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="gray" />
        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#total)"
        />
      </AreaChart>
    </ResponsiveContainer>

    </div>
  );
};

export default Chart;