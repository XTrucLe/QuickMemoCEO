import { Form, Input, InputNumber } from 'antd'
import React from 'react'

const Benefit = ({employee}) => {
  return (
    <div className='grid grid-cols-2 gap-x-5 mb-auto'>
      <p className='p-2 col-span-2 bg-green-500 mb-1'>Benifit Plan information</p>
      <Form.Item
        name="BENEFIT_PLANS_ID"
        label="Benefit Plan ID"
        rules={[{ required: true, message: 'Please input BENEFIT_PLANS_ID!' }]}
      >
        <Input defaultValue={employee?.BENEFIT_PLANS_ID}/>
      </Form.Item>

      <Form.Item
        name="PLAN_NAME"
        label="Plane Name"
        rules={[{ required: true, message: 'Please input PLAN_NAME!' }]}
      >
        <Input defaultValue={employee?.PLAN_NAME}/>
      </Form.Item>

      <Form.Item
        name="DEDUCTABLE"
        label="Deducayable"
        rules={[{ required: true, message: 'Please input DEDUCTABLE!' }]}
      >
        <InputNumber className='w-full' defaultValue={employee?.DEDUCTABLE}/>
      </Form.Item>

      <Form.Item
        name="PERCENTAGE_COPAY"
        label="Percentage Copay"
        rules={[
          { required: true, message: 'Please input PERCENTAGE_COPAY!' },
          { type: 'number', min: 0, max: 50, message: 'Percentage Copay must be less than 50!' }
        ]}
      >
        <InputNumber addonAfter="%" className='w-full' defaultValue={employee?.PERCENTAGE_COPAY}/>
      </Form.Item>
    </div>
  )
}

export default Benefit