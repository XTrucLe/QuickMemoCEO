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
        name="Employee Number"
        rules={[{ required: true, message: 'Please input the employee number!' }]}
      >
        <Input defaultValue={employee ? employee['Employee Number'] : ''} />
      </Form.Item>
      {!disableItem &&
        <>
          <Form.Item
            label="First Name"
            name="First Name"
            rules={[{ required: true, message: "Please input First Name" }]}
          >
            <Input defaultValue={employee ? employee['First Name'] : ''} />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="Last Name"
            rules={[{ required: true, message: "Please input Last Name" }]}
          >
            <Input defaultValue={employee ? employee['Last Name'] : ''} />
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
        name="Pay Rate"
        rules={[{ required: true, message: 'Please input the pay rate!' }]}
      >
        <Input type="number" step="1000" defaultValue={employee ? employee['Pay Rate'] : ''} />
      </Form.Item>

      <Form.Item
        label="Vacation Days"
        name="Vacation Days"
        rules={[{ required: true, message: 'Please input the paid to date!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee ? employee['Vacation Days'] : ''} />
      </Form.Item>

      <Form.Item
        label="Paid To Date"
        name="Paid To Date"
        rules={[{ required: true, message: 'Please input the paid to date!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee ? employee['Paid To Date'] : ''} />
      </Form.Item>

      <Form.Item
        label="Paid Last Year"
        name="Paid Last Year"
        rules={[{ required: true, message: 'Please input the paid last year!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee ? employee['Paid Last Year'] : ''} />
      </Form.Item>
    </div>
  )
}

export default PrEmployee