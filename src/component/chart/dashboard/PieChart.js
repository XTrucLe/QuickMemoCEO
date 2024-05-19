import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const HandlePieChart = ({ data }) => {
  const colors = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#ffc658"];

  return (
    <div className="mt-8">
      <div className="font-light text-lg">Total number of employees by department</div>
      <div className="flex items-center chart-container mx-4 shadow-lg rounded-xl bg-white" style={{ width: 500, height: 300 }}>
        <PieChart width={400} height={300}>
          <Pie
            dataKey="PERSON_COUNT"
            data={data} // Sử dụng dữ liệu từ props
            cx={200}
            cy={150}
            outerRadius={120}
            label
          >
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))
            }
          </Pie>
          <Tooltip />
        </PieChart>
        {/* Chú thích mỗi màu */}
        <div className="color-legend flex flex-col justify-around mt-4">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center mb-2">
              <div className="color-box mr-2" style={{ backgroundColor: colors[index % colors.length], width: "15px", height: "15px" }}></div>
              <span>{`${entry.DEPARTMENT}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandlePieChart;