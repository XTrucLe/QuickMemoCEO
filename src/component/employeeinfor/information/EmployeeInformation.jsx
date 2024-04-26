import { DatePicker, Form, Input } from 'antd'
import React from 'react'

const EmployeeInformation = () => {
  return (
    <div className='grid grid-cols-2 gap-x-5'>
        <Form.Item
          label="EMPLOYMENT_ID"
          name="EMPLOYMENT_ID"
          rules={[{ required: true, message: 'Please input the employment ID!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="EMPLOYMENT_CODE"
          name="EMPLOYMENT_CODE"
          rules={[{ required: true, message: 'Please input the employment code!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="EMPLOYMENT_STATUS"
          name="EMPLOYMENT_STATUS"
          rules={[{ required: true, message: 'Please input the employment status!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="HIRE_DATE_FOR_WORKING"
          name="HIRE_DATE_FOR_WORKING"
          rules={[{ required: true, message: 'Please input the hire date for working!' }]}
        >
          <DatePicker format="MM/DD/YYYY" showTime={false} />
        </Form.Item>

        <Form.Item
          label="WORKERS_COMP_CODE"
          name="WORKERS_COMP_CODE"
          rules={[{ required: true, message: 'Please input the workers comp code!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="TERMINATION_DATE"
          name="TERMINATION_DATE"
          rules={[{ required: true, message: 'Please input the termination date!' }]}
        >
          <DatePicker format="MM/DD/YYYY" showTime={false} />
        </Form.Item>

        <Form.Item
          label="REHIRE_DATE_FOR_WORKING"
          name="REHIRE_DATE_FOR_WORKING"
          rules={[{ required: true, message: 'Please input the rehire date for working!' }]}
        >
          <DatePicker format="MM/DD/YYYY" showTime={false} />
        </Form.Item>

        <Form.Item
          label="LAST_REVIEW_DATE"
          name="LAST_REVIEW_DATE"
          rules={[{ required: true, message: 'Please input the last review date!' }]}
        >
          <DatePicker format="MM/DD/YYYY" showTime={false} />
        </Form.Item>

        <Form.Item
          label="NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH"
          name="NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH"
          rules={[{ required: true, message: 'Please input the number of days requirement of working per month!' }]}
        >
          <Input type="number" />
        </Form.Item>
        </div>
  )
}

export default EmployeeInformation