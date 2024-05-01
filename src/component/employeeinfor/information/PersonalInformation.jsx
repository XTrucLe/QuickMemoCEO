import { DatePicker, Form, Input, Select } from 'antd'
import React from 'react'

const PersonalInformation = () => {
  return (
    <div className='grid grid-cols-2 gap-x-5 mb-auto'>
      <p className='p-2 col-span-2 bg-green-500 mb-1'>Personal information</p>
      <Form.Item
        name="PERSONAL_ID"
        label="Personal ID"
        rules={[{ required: true, message: "Please input Personal ID" }]}
        className='col-span-2'
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="CURRENT_FIRST_NAME"
        label="First Name"
        rules={[{ required: true, message: "Please input First Name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="CURRENT_LAST_NAME"
        label="Last Name"
        rules={[{ required: true, message: "Please input Last Name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="CURRENT_MIDDLE_NAME"
        label="Middle Name"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="BIRTH_DATE"
        label="Birth Date"
        rules={[{ required: true, message: "Please select Birth Date" }]}
      >
        <DatePicker format="MM/DD/YYYY" showTime={false} className='w-full' />
      </Form.Item>

      <Form.Item
        name="SOCIAL_SECURITY_NUMBER"
        label="Social Security Number"
        rules={[{ required: true, message: "Please input Social Security Number" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="DRIVERS_LICENSE"
        label="Drivers License"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="CURRENT_ADDRESS_1"
        label="Address 1"
        rules={[{ required: true, message: "Please input Address 1" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="CURRENT_ADDRESS_2"
        label="Address 2"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="CURRENT_CITY"
        label="City"
        rules={[{ required: true, message: "Please input City" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="CURRENT_COUNTRY"
        label="Country"
        rules={[{ required: true, message: "Please input Country" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="CURRENT_ZIP"
        label="Zip"
        rules={[{ required: true, message: "Please input Zip" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="CURRENT_GENDER"
        label="Gender"
        rules={[{ required: true, message: "Please select Gender" }]}
      >
        <Select>
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="CURRENT_PHONE_NUMBER"
        label="Phone Number"
        rules={[
          { required: true, message: "Please input Phone Number" },
          {
            pattern: /^(\(\d{3}\) |\d{3})\d{3}\d{4}$/,
            message: "Invalid phone number format",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="CURRENT_PERSONAL_EMAIL"
        label="Email"
        rules={[
          { required: true, message: "Please input Email" },
          {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          },
        ]}      >
        <Input />
      </Form.Item>

      <Form.Item
        name="CURRENT_MARITAL_STATUS"
        label="Marital Status"
        rules={[{ required: true, message: "Please select Marital Status" }]}
      >
        <Select>
          <Select.Option value="single">Single</Select.Option>
          <Select.Option value="married">Married</Select.Option>
          <Select.Option value="divorced">Divorced</Select.Option>
          <Select.Option value="widowed">Widowed</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="ETHNICITY"
        label="Ethnicity"
        rules={[{ required: true, message: "Please select Ethnicity" }]}
      >
        <Select>
          <Select.Option value="white">White</Select.Option>
          <Select.Option value="black">Black</Select.Option>
          <Select.Option value="asian">Asian</Select.Option>
          <Select.Option value="hispanic">Hispanic</Select.Option>
          <Select.Option value="native_american">Native American</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="BENEFIT_PLAN_ID"
        label="Benefit Plan ID"
        rules={[{ required: true, message: "Please input BENEFIT_PLAN_ID" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="SHAREHOLDER_STATUS"
        label="Shareholder Status"
        rules={[{ required: true, message: "Please select Shareholder Status" }]}
      >
        <Select>
          <Select.Option value="yes">Yes</Select.Option>
          <Select.Option value="no">No</Select.Option>
        </Select>
      </Form.Item>
    </div>
  )
}

export default PersonalInformation