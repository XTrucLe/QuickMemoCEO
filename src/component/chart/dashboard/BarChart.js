import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const HandleBarChart = ({ data }) => {
  return (
    <div className="mt-8">
      <div className="font-light text-lg">Total vacation days by department</div>
      <div className="flex items-center chart-container mx-2 shadow-lg rounded-xl bg-white" style={{ width: 500, height: 300 }}>
        <BarChart
          width={500}
          height={300}
          data={data} // Sử dụng dữ liệu từ props
          margin={{ top: 20, right: 0, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="DEPARTMENT" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="TotalVacationDays" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default HandleBarChart;