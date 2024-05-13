import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const PayRates = ({ employee, onChange }) => {
  const setChange = () => {
    onChange(true)
  }
  return (
    <div className='grid grid-cols-2 gap-x-5'>
      <Form.Item
        label="Pay Rate Name"
        name="PayRateName"
        rules={employee?.PayRateName ? [] : [{ required: true, message: 'Please input the pay rate name!' }]}
      >
        <Input onChange={setChange} defaultValue={employee?.PayRateName} />
      </Form.Item>

      <Form.Item
        label="Value"
        name="Value"
        rules={employee?.Value ? [] : [{ required: true, message: 'Please input the value!' }]}
      >
        <Input type="number" step="0.01" onChange={setChange} defaultValue={employee?.Value} />
      </Form.Item>

      <Form.Item
        label="Tax Percentage"
        name="TaxPercentage"
        rules={employee?.TaxPercentage ? [] : [{ required: true, message: 'Please input the tax percentage!' }]}
      >
        <Input type="number" step="0.01" onChange={setChange} defaultValue={employee?.TaxPercentage} />
      </Form.Item>

      <Form.Item
        label="Pay Type"
        name="PayType"
        rules={employee?.PayType ? [] : [{ required: true, message: 'Please select the pay type!' }]}
      >
        <Select onChange={setChange} defaultValue={employee?.PayType}>
          <Option value="Hourly">Hourly</Option>
          <Option value="Salary">Salary</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Pay Amount"
        name="PayAmount"
        rules={employee?.PayAmount ? [] : [{ required: true, message: 'Please input the pay amount!' }]}
      >
        <Input type="number" step="0.01" onChange={setChange} defaultValue={employee?.PayAmount} />
      </Form.Item>

      <Form.Item
        label="PT - Level C"
        name="PT_LevelC"
        rules={employee?.PT_LevelC ? [] : [{ required: true, message: 'Please input the PT - Level C!' }]}
      >
        <Input type="number" step="0.01" onChange={setChange} defaultValue={employee?.PT_LevelC} />
      </Form.Item>
    </div>
  );
}

export default PayRates;
