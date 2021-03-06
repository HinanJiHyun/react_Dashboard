import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./chart.css";

// export default class Chart extends PureComponent {
export default function Chart({title, data, dataKey, grid}){
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#5550bd'/>
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          {grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf"/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}