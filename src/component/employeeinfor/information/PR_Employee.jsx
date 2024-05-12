import { Form, Input } from 'antd'
import React from 'react'

const PrEmployee = ({ employee, disableItem = true }) => {
  return (
    <div className='grid grid-cols-2 gap-x-5'>
      <p className='bg-green-500 mb-1 p-2 col-span-2'>Pay roll information</p>
      {!disableItem &&
        <Form.Item
          label="Employee ID"
          name="idEmployee"
          rules={[{ required: true, message: 'Please input the employment ID!' }]}
        >
          <Input defaultValue={employee?.idEmployee} />
        </Form.Item>
      }

      <Form.Item
        label="Employee Number"
        name="EmployeeNumber"
        rules={[{ required: true, message: 'Please input the employee number!' }]}
      >
        <Input defaultValue={employee?.EmployeeNumber} />
      </Form.Item>
      {!disableItem &&
        <>
          <Form.Item
            label="First Name"
            name="FirstName"
            rules={[{ required: true, message: "Please input First Name" }]}
          >
            <Input defaultValue={employee?.FirstName} />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="LastName"
            rules={[{ required: true, message: "Please input Last Name" }]}
          >
            <Input defaultValue={employee?.LastName} />
          </Form.Item>
        </>
      }
      <Form.Item
        label="SSN"
        name="SSN"
        rules={[{ required: true, message: 'Please input the SSN!' }]}
      >
        <Input defaultValue={employee?.SSN} />
      </Form.Item>

      <Form.Item
        label="Pay Rate"
        name="PayRate"
        rules={[{ required: true, message: 'Please input the pay rate!' }]}
      >
        <Input type="number" step="1000" defaultValue={employee?.PayRate} />
      </Form.Item>

      <Form.Item
        label="Vacation Days"
        name="VacationDays"
        rules={[{ required: true, message: 'Please input the paid to date!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee?.VacationDays} />
      </Form.Item>

      <Form.Item
        label="Paid To Date"
        name="PaidToDate"
        rules={[{ required: true, message: 'Please input the paid to date!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee?.PaidToDate} />
      </Form.Item>

      <Form.Item
        label="Paid Last Year"
        name="PaidLastYear"
        rules={[{ required: true, message: 'Please input the paid last year!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee?.PaidLastYear} />
      </Form.Item>
    </div>
  )
}

export default PrEmployee