
import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const resultData = [
    { id: 1, name: "Rahim", physics: 78, chemistry: 82, math: 90 },
    { id: 2, name: "Karim", physics: 65, chemistry: 70, math: 68 },
    { id: 3, name: "Ayesha", physics: 88, chemistry: 91, math: 95 },
    { id: 4, name: "Nusrat", physics: 72, chemistry: 75, math: 80 },
    { id: 5, name: "Sakib", physics: 60, chemistry: 66, math: 70 },
    { id: 6, name: "Mim", physics: 85, chemistry: 89, math: 92 },
    { id: 7, name: "Tanvir", physics: 55, chemistry: 60, math: 58 },
    { id: 8, name: "Jannat", physics: 90, chemistry: 93, math: 97 },
    { id: 9, name: "Hasan", physics: 68, chemistry: 72, math: 75 },
    { id: 10, name: "Fahim", physics: 80, chemistry: 85, math: 88 }
];

const ResultChart = () => {
    return (
        <div>
            <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} data={resultData}>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
            </LineChart>

            <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={resultData}>
                <CartesianGrid />
                <Line dataKey="math" />
                <Line dataKey="physics" />
                <Line dataKey="chemistry" />
                <YAxis />
                <Legend />
                {/* <RechartsDevtools /> */}
            </LineChart>

            <LineChart
                style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }}
                responsive
                data={resultData}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 5,
                    left: 0,
                }}
            >
                <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="math" stroke="purple" strokeWidth={2} name="Rahim" />
                <XAxis dataKey="name" />
                <YAxis width="auto" label={{ value: 'math', position: 'insideLeft', angle: -90 }} />
                <Legend align="right" />
                <Tooltip />
                {/* <RechartsDevtools /> */}
            </LineChart>
        </div>
    );
};

export default ResultChart;