import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export function Analytics({ clients = 0, patientNum = 0, totalTime = [] }) {
  const chartData = React.useMemo(() => {
    return clients.map((client) => ({
      name: client.name?.split(" ")[0] || "Unknown",
      minutes: Math.floor((client.timeSpent || 0) / 60),
      originalTime: client.timeSpent || 0,
    }));
  }, [clients]);

  const analysis = React.useMemo(() => {
    const totalMin = Math.floor(totalTime / 60);
    const totalSec = totalTime % 60;
    const averageTime = clients.length
      ? Math.floor(totalTime / clients.length / 60)
      : 0;

    return { totalMin, totalSec, averageTime };
  }, [totalTime, clients.length]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border rounded shadow-sm">
          <p className="font-medium">{label}</p>
          <p className="text-sm">Duration: {payload[0].value} minutes</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="col-span-1 row-span-1 bg-teal-200 rounded-md p-4">
      <h3 className="text-xl font-bold mb-4">Analytics</h3>
      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm text-gray-600">Total Clients</p>
          <p className="text-base">{patientNum}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm text-gray-600">Total Time</p>
          <p className="text-base">
            {analysis.totalMin} min :{" "}
            {analysis.totalSec < 10
              ? `0${analysis.totalSec}`
              : analysis.totalSec}{" "}
            Sec
          </p>
        </div>
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-sm text-gray-600">Average Time</p>
          <p className="text-base">{analysis.averageTime} min</p>
        </div>
      </div>

      <div className="w-full h-64">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fill: "#374151" }} />
              <YAxis
                tick={{ fill: "#374151" }}
                label={{
                  value: "Minutes",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#374151",
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="minutes"
                fill="#fff"
                name="Session Duration"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No data available
          </div>
        )}
      </div>
    </div>
  );
}
