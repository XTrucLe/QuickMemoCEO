import { Form, Input, InputNumber } from 'antd'
import React from 'react'

const WorkingInfor = ({employee}) => {
  return (
    <div className='grid grid-cols-2 gap-x-5 mb-auto'>
    {/* Title of fields */}
      <p className='p-2 col-span-2 bg-green-500 mb-1'>Working time information</p>
      {/* list form item in Working time information */}
      <Form.Item
        name="EMPLOYMENT_ID"
        label="Employment ID"
        rules={[{ required: true, message: 'Please input EMPLOYMENT_ID!' }]}
      >
        <Input defaultValue={employee?.EMPLOYMENT_ID}/>
      </Form.Item>

      <Form.Item
        label="WorkingTime ID"
        name="EMPLOYMENT_WORKING_TIME_ID"
        rules={[{ required: true, message: 'Please input WorkingTime ID!' }]}
      >
        <Input defaultValue={employee?.EMPLOYMENT_WORKING_TIME_ID}/>
      </Form.Item>

      <Form.Item
        name="MONTH_WORKING"
        label="Month Working"
        rules={[{ required: true, message: 'Please input Month Working!' }]}
      >
        <InputNumber className='w-full' defaultValue={employee?.MONTH_WORKING}/>
      </Form.Item>

      <Form.Item
        name="YEAR_WORKING"
        label="Year Working"
        rules={[{ required: true, message: 'Please input Year Working!' }]}
      >
        <InputNumber className='w-full' defaultValue={employee?.YEAR_WORKING}/>
      </Form.Item>

      <Form.Item
        name="NUMBER_DAYS_ACTUAL_OF_WORKING_PER_MONTH"
        label="Working Days/Month"
        rules={[{ required: true, message: 'Please input Working Days/Month!' }]}
      >
        <InputNumber className='w-full' defaultValue={employee?.NUMBER_DAYS_ACTUAL_OF_WORKING_PER_MONTH}/>
      </Form.Item>

      <Form.Item
        name="TOTAL_NUMBER_VACATION_WORKING_DAYS_PER_MONTH"
        label="Vacation Working Days"
        rules={[{ required: true, message: 'Please input Vacation Working Days!' }]}
      >
        <InputNumber className='w-full' defaultValue={employee?.TOTAL_NUMBER_VACATION_WORKING_DAYS_PER_MONTH}/>
      </Form.Item></div>
  )
}

export default WorkingInfor