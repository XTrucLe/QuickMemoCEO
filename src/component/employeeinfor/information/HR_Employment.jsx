import React from 'react'
import dayjs from 'dayjs'
import { Form, Input, InputNumber, Select } from 'antd'


const Employment = ({ employee, onChange, disableItem = true }) => {
  const setChange = (value) => {
    if (typeof onChange === 'function')
      onChange(true)

  }
  return (
    <div className='grid grid-cols-2 gap-x-5 mb-auto'>
      <p className='p-2 col-span-2 bg-green-500 mb-1'>Employment information</p>
      {!disableItem &&
        <Form.Item
          label="Personal ID"
          name="PERSONAL_ID"
          rules={employee?.PERSONAL_ID ? [] : [
            { required: true, message: 'Please input the Personal ID!' }
          ]}
        >
          <Input type='number' defaultValue={employee?.PERSONAL_ID ? employee.PERSONAL_ID : undefined} />
        </Form.Item>

      }
      <Form.Item
        label="Employment ID"
        name="EMPLOYMENT_ID"
        rules={employee?.EMPLOYMENT_ID ? [] : [{ required: true, message: 'Please input the employment ID!' }]}
      >
        <Input type='number' onChange={setChange} defaultValue={employee?.EMPLOYMENT_ID} />
      </Form.Item>

      <Form.Item
        label="Employment Code"
        name="EMPLOYMENT_CODE"
        rules={employee?.EMPLOYMENT_CODE ? [] : [{ required: true, message: 'Please input the employment code!' }]}
      >
        <Input onChange={setChange} defaultValue={employee?.EMPLOYMENT_CODE} />
      </Form.Item>

      <Form.Item
        label="Employment Status"
        name="EMPLOYMENT_STATUS"
        rules={employee?.EMPLOYMENT_STATUS ? [] : [{ required: true, message: 'Please input the employment status!' }]}
      >
        <Select defaultValue={employee?.EMPLOYMENT_STATUS} onChange={setChange} style={{ width: '100%' }}>
          <Select.Option value="Active">Active</Select.Option>
          <Select.Option value="Not Active">Not Active</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Worker Comp Code"
        name="WORKERS_COMP_CODE"
        rules={employee?.WORKERS_COMP_CODE ? [] : [{ required: true, message: 'Please input the workers comp code!' }]}
      >
        <Input onChange={setChange} defaultValue={employee?.WORKERS_COMP_CODE} />
      </Form.Item>

      <Form.Item
        label="Start Working Days "
        name="HIRE_DATE_FOR_WORKING"
        rules={employee?.HIRE_DATE_FOR_WORKING ? [] : [{ required: true, message: 'Please input the hire date for working!' }]}
      >
        <Input
          type="date"
          format="YYYY-MM-DD"
          className='w-full'
          onChange={setChange}
          defaultValue={employee && employee.HIRE_DATE_FOR_WORKING ? dayjs(employee?.HIRE_DATE_FOR_WORKING).format("YYYY-MM-DD") : ''}
        />
      </Form.Item>

      <Form.Item
        label="Rehire Date"
        name="REHIRE_DATE_FOR_WORKING"
        rules={employee?.REHIRE_DATE_FOR_WORKING ? [] : [{ required: true, message: 'Please input the rehire date for working!' }]}
      >
        <Input
          type="date"
          format="YYYY-MM-DD"
          className='w-full'
          onChange={setChange}
          defaultValue={employee && employee.REHIRE_DATE_FOR_WORKING ? dayjs(employee?.REHIRE_DATE_FOR_WORKING).format("YYYY-MM-DD") : ''}
        />
      </Form.Item>

      <Form.Item
        label="Termination Date"
        name="TERMINATION_DATE"
        rules={employee?.TERMINATION_DATE ? [] : [{ required: true, message: 'Please input the termination date!' }]}
      >
        <Input
          type="date"
          format="YYYY-MM-DD"
          className='w-full'
          onChange={setChange}
          defaultValue={employee && employee.TERMINATION_DATE ? dayjs(employee?.TERMINATION_DATE).format("YYYY-MM-DD") : ''}
        />
      </Form.Item>

      <Form.Item
        label="Last Review Date"
        name="LAST_REVIEW_DATE"
        rules={employee?.LAST_REVIEW_DATE ? [] : [{ required: true, message: 'Please input the last review date!' }]}
      >
        <Input
          type="date"
          format="YYYY-MM-DD"
          className='w-full'
          onChange={setChange}
          defaultValue={employee && employee.LAST_REVIEW_DATE ? dayjs(employee?.LAST_REVIEW_DATE).format("YYYY-MM-DD") : ''}
        />
      </Form.Item>

      <Form.Item
        label="Monthly Working Days Needed"
        name="NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH"
        rules={employee?.NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH ? [] : [{ required: true, message: 'Please input the number of days requirement of working per month!' }
        ]}
      >
        <Input type="number" className='w-full' onChange={setChange} defaultValue={employee?.NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH} />
      </Form.Item>
    </div>
  )
}

export default Employment