import { Form, Input, InputNumber } from 'antd'
import React from 'react'

const WorkingInfor = ({ employee, onChange }) => {
  const setChange=()=>{
    if(onChange)
    onChange(true)
  }
  return (
    <div className='grid grid-cols-2 gap-x-5 mb-auto'>
      {/* Title of fields */}
      <p className='p-2 col-span-2 bg-green-500 mb-1'>Working time information</p>
      {/* list form item in Working time information */}
      <Form.Item
        name="EMPLOYMENT_ID"
        label="Employment ID"
        rules={employee?.EMPLOYMENT_ID ? [] : [{ required: true, message: 'Please input EMPLOYMENT_ID!' }]}
      >
        <Input onChange={setChange} defaultValue={employee?.EMPLOYMENT_ID} />
      </Form.Item>

      <Form.Item
        label="WorkingTime ID"
        name="EMPLOYMENT_WORKING_TIME_ID"
        rules={employee?.EMPLOYMENT_WORKING_TIME_ID ? [] : [{ required: true, message: 'Please input WorkingTime ID!' }]}
      >
        <Input onChange={setChange} defaultValue={employee?.EMPLOYMENT_WORKING_TIME_ID} />
      </Form.Item>

      <Form.Item
        label="Month Working"
        name="MONTH_WORKING"
        rules={employee?.MONTH_WORKING ? [] : [{ required: true, message: 'Please input Month Working!' }]}
      >
        <InputNumber className='w-full' onChange={setChange} defaultValue={employee?.MONTH_WORKING} />
      </Form.Item>

      <Form.Item
        name="YEAR_WORKING"
        label="Year Working"
        rules={employee?.YEAR_WORKING ? [] : [{ required: true, message: 'Please input Year Working!' }]}
      >
        <InputNumber className='w-full' onChange={setChange} defaultValue={employee?.YEAR_WORKING} />
      </Form.Item>

      <Form.Item
        label="Working Days/Month"
        name="NUMBER_DAYS_ACTUAL_OF_WORKING_PER_MONTH"
        rules={employee?.NUMBER_DAYS_ACTUAL_OF_WORKING_PER_MONTH ? [] : [{ required: true, message: 'Please input Working Days/Month!' }]}
      >
        <InputNumber className='w-full' onChange={setChange} defaultValue={employee?.NUMBER_DAYS_ACTUAL_OF_WORKING_PER_MONTH} />
      </Form.Item>

      <Form.Item
        name="TOTAL_NUMBER_VACATION_WORKING_DAYS_PER_MONTH"
        label="Vacation Working Days"
        rules={employee?.TOTAL_NUMBER_VACATION_WORKING_DAYS_PER_MONTH ? [] : [{ required: true, message: 'Please input Vacation Working Days!' }]}
      >
        <InputNumber className='w-full' onChange={setChange} defaultValue={employee?.TOTAL_NUMBER_VACATION_WORKING_DAYS_PER_MONTH} />
      </Form.Item></div>
  )
}

export default WorkingInfor