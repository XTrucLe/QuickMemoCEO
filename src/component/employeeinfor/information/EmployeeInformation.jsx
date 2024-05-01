import { DatePicker, Form, Input, InputNumber } from 'antd'
import React from 'react'

const EmployeeInformation = () => {
  return (
    <div className='grid grid-cols-2 gap-x-5 mb-auto'>
      <p className='p-2 col-span-2 bg-green-500 mb-1'>Employment information</p>
      <Form.Item
        label="Employment ID"
        name="EMPLOYMENT_ID"
        rules={[{ required: true, message: 'Please input the employment ID!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Employment Code"
        name="EMPLOYMENT_CODE"
        rules={[{ required: true, message: 'Please input the employment code!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Employment Status"
        name="EMPLOYMENT_STATUS"
        rules={[{ required: true, message: 'Please input the employment status!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Worker Comp Code"
        name="WORKERS_COMP_CODE"
        rules={[{ required: true, message: 'Please input the workers comp code!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Hire Date For Working "
        name="HIRE_DATE_FOR_WORKING"
        rules={[{ required: true, message: 'Please input the hire date for working!' }]}
      >
        <DatePicker format="MM/DD/YYYY" showTime={false} className='w-full'/>
      </Form.Item>

      <Form.Item
        label="Rehire Date For Working"
        name="REHIRE_DATE_FOR_WORKING"
        rules={[{ required: true, message: 'Please input the rehire date for working!' }]}
      >
        <DatePicker format="MM/DD/YYYY" showTime={false} className='w-full'/>
      </Form.Item>

      <Form.Item
        label="Termination Date"
        name="TERMINATION_DATE"
        rules={[{ required: true, message: 'Please input the termination date!' }]}
      >
        <DatePicker format="MM/DD/YYYY" showTime={false} className='w-full'/>
      </Form.Item>

      <Form.Item
        label="Last Review Date"
        name="LAST_REVIEW_DATE"
        rules={[{ required: true, message: 'Please input the last review date!' }]}
      >
        <DatePicker format="MM/DD/YYYY" showTime={false} className='w-full'/>
      </Form.Item>

      <Form.Item
        label="Number Days Requirement Of Working Per Month"
        name="NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH"
        rules={[{ required: true, message: 'Please input the number of days requirement of working per month!' }
        ]}
      >
        <InputNumber type="number" className='w-full'/>
      </Form.Item>
    </div>
  )
}

export default EmployeeInformation