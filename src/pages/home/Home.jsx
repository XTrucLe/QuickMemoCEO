import React, { useEffect, useState } from 'react'
import Option from '../../component/DashboardOption/Option'
import HandlePieChart from '../../component/chart/dashboard/PieChart';
import HandleBarChart from '../../component/chart/dashboard/BarChart';
import { chart } from '../../api';
import axios from 'axios';
const Home = () => {
  const [departmentData, setDepartmentData] = useState([]);
  const [departmentVacationData, setDepartmentVacationData] = useState([]);

  const fetchChartData = async () => {
    try {
      const barChartResponse = await axios.get(chart.barchart);
      setDepartmentData(barChartResponse.data.dash_board_department);
  
      const pieChartResponse = await axios.get(chart.piechart);
      setDepartmentVacationData(pieChartResponse.data.dash_board_department_vacation); // Giả định rằng `piechart` trả về `vacation_data`
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu: ', error);
    }
  };
  
  useEffect(() => {
    fetchChartData();
  }, []);
  return (
    <>
      <div className='flex w-full h-9 mb-1'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <p className='h-full pt-3 pl-1' style={{color: 'rgb(178, 190, 201)'}}>Control panel</p>
      </div>
      {/* option about manager!*/}
      <Option ></Option>
      {/* main chart in dashboard */}
        <div className='flex justify-between mx-5 mt-3'>
          {/* Sử dụng dữ liệu departmentData để vẽ piechart */}
          <HandlePieChart data={departmentData} /> 
          {/* Sử dụng dữ liệu departmentVacationData để vẽ barchart */}
          <HandleBarChart data={departmentVacationData} /> 
        </div>
    </>

  )
}

export default Home