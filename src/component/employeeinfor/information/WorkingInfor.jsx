import { Form, Input, InputNumber } from 'antd'
import React from 'react'

const WorkingInfor = () => {
  return (
    <div className='grid grid-cols-2 gap-x-5'>
    <p className='p-2 col-span-2 bg-green-500 mb-1'>Working time information</p>
    <Form.Item
      name="EMPLOYMENT_WORKING_TIME_ID"
      label="EMPLOYMENT_WORKING_TIME_ID"
      rules={[{ required: true, message: 'Please input EMPLOYMENT_WORKING_TIME_ID!' }]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      name="EMPLOYMENT_ID"
      label="EMPLOYMENT_ID"
      rules={[{ required: true, message: 'Please input EMPLOYMENT_ID!' }]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      name="YEAR_WORKING"
      label="YEAR_WORKING"
      rules={[{ required: true, message: 'Please input YEAR_WORKING!' }]}
    >
      <InputNumber />
    </Form.Item>

    <Form.Item
      name="MONTH_WORKING"
      label="MONTH_WORKING"
      rules={[{ required: true, message: 'Please input MONTH_WORKING!' }]}
    >
      <InputNumber />
    </Form.Item>
    
    <Form.Item
      name="NUMBER_DAYS_ACTUAL_OF_WORKING_PER_MONTH"
      label="NUMBER_DAYS_ACTUAL_OF_WORKING_PER_MONTH"
      rules={[{ required: true, message: 'Please input NUMBER_DAYS_ACTUAL_OF_WORKING_PER_MONTH!' }]}
    >
      <InputNumber />
    </Form.Item>
    
    <Form.Item
      name="TOTAL_NUMBER_VACATION_WORKING_DAYS_PER_MONTH"
      label="TOTAL_NUMBER_VACATION_WORKING_DAYS_PER_MONTH"
      rules={[{ required: true, message: 'Please input TOTAL_NUMBER_VACATION_WORKING_DAYS_PER_MONTH!' }]}
    >
      <InputNumber />
    </Form.Item></div>
  )
}

export default WorkingInfor