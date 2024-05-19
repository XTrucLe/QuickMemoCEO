import React, { useState, useEffect } from 'react';
import GetData from './../../api/REST/Get';
import { Table } from 'antd';
import { statistical } from '../../api';

const Statistical = () => {
  const [vacationData, setVacationData] = useState([]);
  const [benefitData, setBenefitData] = useState([]);
  const [incomeData, setIncomeData] = useState([]);

  const newIncomeData = GetData({ url: statistical.income, dataField: 'Income' })
  const newVacationData = GetData({ url: statistical.vacation, dataField: 'Vacation' })
  const newBenefitData = GetData({ url: statistical.benefit, dataField: 'data' })

  // Khi component được mount lên, fetch dữ liệu
  useEffect(() => {
    try {
      setVacationData(newVacationData)
      setBenefitData(newBenefitData)
      setIncomeData(newIncomeData)
    } catch (error) {
      console.error(error)
    }
  }, [newVacationData, newBenefitData, newIncomeData])
  // Định nghĩa cột cho bảng dữ liệu nghỉ phép
  const vacationColumns = [
    {
      title: 'ID',
      dataIndex: 'employee_id',
      key: 'employee_id'
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name'
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name'
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department'
    },
    {
      title: 'Gender',
      dataIndex: 'current_gender',
      key: 'current_gender'
    },
    {
      title: 'Ethnicity',
      dataIndex: 'ethnicity',
      key: 'ethnicity'
    },
    {
      title: 'Employment Type',
      dataIndex: 'type_of_work',
      key: 'type_of_work',
      filters: [//filter values
        { text: 'Full Time', value: 'Full Time' },
        { text: 'Part Time', value: 'Part Time' },
      ],
      onFilter: (value, record) => record.type_of_work.toLowerCase() === value.toLowerCase(),
    },
    {
      title: 'Vacation Days',
      dataIndex: 'vacation_days',
      key: 'vacation_days'
    },
    {
      title: 'Vacation Per Month',
      dataIndex: 'vacation_per_month',
      key: 'vacation_per_month'
    },
  ]



  // Định nghĩa cột cho bảng dữ liệu thu nhap
  const BenefitColumns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Benefit Plan',
      dataIndex: 'Benefit_Plan_Name',
      key: 'Benefit_Plan_Name',
      sorter: (a, b) => a.Benefit_Plan_Name.localeCompare(b.Benefit_Plan_Name), // Sort by Full Name
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Shareholder Status',
      dataIndex: 'Shareholder_Status',
      key: 'Shareholder_Status',      
      filters: [//filter values
        { text: 'Share Holder', value: 'Share Holder' },
        { text: 'Non Shareholder', value: 'Non Shareholder' },
      ],
      onFilter: (value, record) => record.Shareholder_Status === value,
    },
    {
      title: 'Average Benefit',
      dataIndex: 'Average_Benefit_Paid',
      key: 'Average_Benefit_Paid'
    },
  ];
  const IncomeColumns = [
    {
      title: 'Employee ID',
      dataIndex: 'employee_id',
      key: 'employee_id',
    },
    {
      title: 'Personal ID',
      dataIndex: 'personal_id',
      key: 'personal_id',
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Paid To Date',
      dataIndex: 'paid_to_date',
      key: 'paid_to_date',
    },
    {
      title: 'Paid Last Year',
      dataIndex: 'paid_last_year',
      key: 'paid_last_year',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Gender',
      dataIndex: 'current_gender',
      key: 'current_gender',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Type of Work',
      dataIndex: 'type_of_work',
      key: 'type_of_work',
    },
    {
      title: 'Ethnicity',
      dataIndex: 'ethnicity',
      key: 'ethnicity',
    },
  ];

  return (
    <div className='m-3'>
      <div className='text-3xl font-bold '>Statistical</div>
      <div className=' m-3 mt-5'>
        <p className='text-lg font-bold'>Income Table</p>
        <Table dataSource={incomeData} columns={IncomeColumns} scroll={{ y: 200 }} />
        <p className='text-lg font-bold'>Vacation Table</p>
        <Table dataSource={vacationData} columns={vacationColumns} scroll={{ y: 200 }} />
        <div className=' mt-14'></div>
        <p className='text-lg font-bold'>Benefit Table</p>
        <Table dataSource={benefitData} columns={BenefitColumns} scroll={{ y: 200 }} />

      </div>

    </div>
  );
};

export default Statistical