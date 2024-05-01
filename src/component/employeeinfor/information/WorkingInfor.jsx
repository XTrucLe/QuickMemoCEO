import { Form, Input, InputNumber } from 'antd'
import React from 'react'

const WorkingInfor = () => {
  return (
    <div className='grid grid-cols-2 gap-x-5 mb-auto'>
      <p className='p-2 col-span-2 bg-green-500 mb-1'>Working time information</p>
      <Form.Item
        name="EMPLOYMENT_WORKING_TIME_ID"
        label="Employment WorkingTime ID"
        rules={[{ required: true, message: 'Please input EMPLOYMENT_WORKING_TIME_ID!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="EMPLOYMENT_ID"
        label="Employment ID"
        rules={[{ required: true, message: 'Please input EMPLOYMENT_ID!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="MONTH_WORKING"
        label="Month Working"
        rules={[{ required: true, message: 'Please input MONTH_WORKING!' }]}
      >
        <InputNumber className='w-full'/>
      </Form.Item>

      <Form.Item
        name="YEAR_WORKING"
        label="Year Working"
        rules={[{ required: true, message: 'Please input YEAR_WORKING!' }]}
      >
        <InputNumber className='w-full'/>
      </Form.Item>

      <Form.Item
        name="NUMBER_DAYS_ACTUAL_OF_WORKING_PER_MONTH"
        label="Number Days Actual Of Working Per Month"
        rules={[{ required: true, message: 'Please input NUMBER_DAYS_ACTUAL_OF_WORKING_PER_MONTH!' }]}
      >
        <InputNumber className='w-full'/>
      </Form.Item>

      <Form.Item
        name="TOTAL_NUMBER_VACATION_WORKING_DAYS_PER_MONTH"
        label="Total Number Vacation Working Days Per Month"
        rules={[{ required: true, message: 'Please input TOTAL_NUMBER_VACATION_WORKING_DAYS_PER_MONTH!' }]}
      >
        <InputNumber className='w-full'/>
      </Form.Item></div>
  )
}

export default WorkingInfor