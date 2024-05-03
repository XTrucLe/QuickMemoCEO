import { Form, Input } from 'antd'
import React from 'react'

const PayRateInfor = ({ employee }) => {
  return (
    <div className='grid grid-cols-2 gap-x-5'>
      <p className='bg-green-500 mb-1 p-2 col-span-2'>Pay roll information</p>
      <Form.Item
        label="Employee Number"
        name="employeeNumber"
        rules={[{ required: true, message: 'Please input the employee number!' }]}
      >
        <Input defaultValue={employee?.employeeNumber} />
      </Form.Item>

      <Form.Item
        label="SSN"
        name="ssn"
        rules={[{ required: true, message: 'Please input the SSN!' }]}
      >
        <Input defaultValue={employee?.ssn} />
      </Form.Item>

      <Form.Item
        label="Pay Rate"
        name="payRate"
        rules={[{ required: true, message: 'Please input the pay rate!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee?.payRate} />
      </Form.Item>

      <Form.Item
        label="Paid To Date"
        name="paidToDate"
        rules={[{ required: true, message: 'Please input the paid to date!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee?.paidToDate} />
      </Form.Item>

      <Form.Item
        label="Paid Last Year"
        name="paidLastYear"
        rules={[{ required: true, message: 'Please input the paid last year!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee?.paidLastYear} />
      </Form.Item>
    </div>
  )
}

export default PayRateInfor