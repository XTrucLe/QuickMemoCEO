import { Form, Input, InputNumber } from 'antd'
import React from 'react'

const BenifitInfor = () => {
  return (
    <div className='grid grid-cols-2 gap-x-5'>
    <p className='p-2 col-span-2 bg-green-500 mb-1'>Benifit Plan information</p>
    <Form.Item
    name="BENEFIT_PLANS_ID"
    label="BENEFIT_PLANS_ID"
    rules={[{ required: true, message: 'Please input BENEFIT_PLANS_ID!' }]}
  >
    <Input />
  </Form.Item>
  
  <Form.Item
    name="PLAN_NAME"
    label="PLAN_NAME"
    rules={[{ required: true, message: 'Please input PLAN_NAME!' }]}
  >
    <Input />
  </Form.Item>
  
  <Form.Item
    name="DEDUCTABLE"
    label="DEDUCTABLE"
    rules={[{ required: true, message: 'Please input DEDUCTABLE!' }]}
  >
    <InputNumber />
  </Form.Item>
  
  <Form.Item
    name="PERCENTAGE_COPAY"
    label="PERCENTAGE_COPAY"
    rules={[{ required: true, message: 'Please input PERCENTAGE_COPAY!' }]}
  >
    <InputNumber addonAfter="%" />
  </Form.Item></div>
  )
}

export default BenifitInfor