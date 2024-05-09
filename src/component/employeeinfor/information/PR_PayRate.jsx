import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const PayRates = ({ employee }) => {
  return (
    <div className='grid grid-cols-2 gap-x-5'>
      <Form.Item
        label="Pay Rate Name"
        name="payRateName"
        rules={[{ required: true, message: 'Please input the pay rate name!' }]}
      >
        <Input defaultValue={employee ? employee['Pay Rate Name'] : ''} />
      </Form.Item>

      <Form.Item
        label="Value"
        name="value"
        rules={[{ required: true, message: 'Please input the value!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee ? employee['Value'] : ''} />
      </Form.Item>

      <Form.Item
        label="Tax Percentage"
        name="taxPercentage"
        rules={[{ required: true, message: 'Please input the tax percentage!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee ? employee['Tax Percentage'] : ''} />
      </Form.Item>

      <Form.Item
        label="Pay Type"
        name="payType"
        rules={[{ required: true, message: 'Please select the pay type!' }]}
      >
        <Select defaultValue={employee ? employee['Pay Type'] : ''}>
          <Option value="Hourly">Hourly</Option>
          <Option value="Salary">Salary</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Pay Amount"
        name="payAmount"
        rules={[{ required: true, message: 'Please input the pay amount!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee ? employee['Pay Amount'] : ''} />
      </Form.Item>

      <Form.Item
        label="PT - Level C"
        name="ptLevelC"
        rules={[{ required: true, message: 'Please input the PT - Level C!' }]}
      >
        <Input type="number" step="0.01" defaultValue={employee ? employee['PT - Level C'] : ''} />
      </Form.Item>
    </div>
  );
}

export default PayRates;
