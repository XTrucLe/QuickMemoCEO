import { Form, Input } from 'antd'
import React from 'react'

const PrEmployee = ({ employee, onChange,disableItem = true }) => {
  const setChange=()=>{
    onChange(true)
  }
  return (
    <div className='grid grid-cols-2 gap-x-5'>
      <p className='bg-green-500 mb-1 p-2 col-span-2'>Pay roll information</p>
      {!disableItem &&
        <Form.Item
          label="Employee ID"
          name="idEmployee"
          rules={employee?.idEmployee ? [] : [{ required: true, message: 'Please input the employment ID!' }]}
        >
          <Input onChange={setChange} defaultValue={employee?.idEmployee} />
        </Form.Item>
      }

      <Form.Item
        label="Employee Number"
        name="EmployeeNumber"
        rules={employee?.EmployeeNumber ? [] : [{ required: true, message: 'Please input the employee number!' }]}
      >
        <Input onChange={setChange} defaultValue={employee?.EmployeeNumber} />
      </Form.Item>
      {!disableItem &&
        <>
          <Form.Item
            label="First Name"
            name="FirstName"
            rules={employee?.FirstName ? [] : [{ required: true, message: "Please input First Name" }]}
          >
            <Input onChange={setChange} defaultValue={employee?.FirstName} />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="LastName"
            rules={employee?.LastName ? [] : [{ required: true, message: "Please input Last Name" }]}
          >
            <Input onChange={setChange} defaultValue={employee?.LastName} />
          </Form.Item>
        </>
      }
      <Form.Item
        label="SSN"
        name="SSN"
        rules={employee?.SSN ? [] : [{ required: true, message: 'Please input the SSN!' }]}
      >
        <Input onChange={setChange} defaultValue={employee?.SSN} />
      </Form.Item>

      <Form.Item
        label="Pay Rate"
        name="PayRate"
        rules={employee?.PayRate ? [] : [{ required: true, message: 'Please input the pay rate!' }]}
      >
        <Input type="number" step="1000" onChange={setChange} defaultValue={employee?.PayRate} />
      </Form.Item>

      <Form.Item
        label="Vacation Days"
        name="VacationDays"
        rules={employee?.VacationDays ? [] : [{ required: true, message: 'Please input the paid to date!' }]}
      >
        <Input type="number" step="0.01" onChange={setChange} defaultValue={employee?.VacationDays} />
      </Form.Item>

      <Form.Item
        label="Paid To Date"
        name="PaidToDate"
        rules={employee?.PaidToDate ? [] : [{ required: true, message: 'Please input the paid to date!' }]}
      >
        <Input type="number" step="0.01" onChange={setChange} defaultValue={employee?.PaidToDate} />
      </Form.Item>

      <Form.Item
        label="Paid Last Year"
        name="PaidLastYear"
        rules={employee?.PaidLastYear ? [] : [{ required: true, message: 'Please input the paid last year!' }]}
      >
        <Input type="number" step="0.01" onChange={setChange} defaultValue={employee?.PaidLastYear} />
      </Form.Item>
    </div>
  )
}

export default PrEmployee