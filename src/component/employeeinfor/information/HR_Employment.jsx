import React from 'react'
import dayjs from 'dayjs'
import { DatePicker, Form, Input, InputNumber } from 'antd'

const Employment = ({ employee, disableItem = true }) => {
  return (
    <div className='grid grid-cols-2 gap-x-5 mb-auto'>
      <p className='p-2 col-span-2 bg-green-500 mb-1'>Employment information</p>
      {!disableItem &&
        <Form.Item
          label="Personal ID"
          name="PERSONAL_ID"
          rules={[{ required: true, message: 'Please input the Personal ID!' }]}
        >
          <Input defaultValue={employee?.PERSONAL_ID} />
        </Form.Item>
      }
      <Form.Item
        label="Employment ID"
        name="EMPLOYMENT_ID"
        rules={[{ required: true, message: 'Please input the employment ID!' }]}
      >
        <Input defaultValue={employee?.EMPLOYMENT_ID} />
      </Form.Item>

      <Form.Item
        label="Employment Code"
        name="EMPLOYMENT_CODE"
        rules={[{ required: true, message: 'Please input the employment code!' }]}
      >
        <Input defaultValue={employee?.EMPLOYMENT_CODE} />
      </Form.Item>

      <Form.Item
        label="Employment Status"
        name="EMPLOYMENT_STATUS"
        rules={[{ required: true, message: 'Please input the employment status!' }]}
      >
        <Input defaultValue={employee?.EMPLOYMENT_STATUS} />
      </Form.Item>

      <Form.Item
        label="Worker Comp Code"
        name="WORKERS_COMP_CODE"
        rules={[{ required: true, message: 'Please input the workers comp code!' }]}
      >
        <Input defaultValue={employee?.WORKERS_COMP_CODE} />
      </Form.Item>

      <Form.Item
        label="Start Working Days "
        name="HIRE_DATE_FOR_WORKING"
        rules={[{ required: true, message: 'Please input the hire date for working!' }]}
      >
        <DatePicker
          format="MM/DD/YYYY" showTime={false} className='w-full'
          defaultValue={employee && employee.HIRE_DATE_FOR_WORKING ? dayjs(employee?.HIRE_DATE_FOR_WORKING) : ''}
        />
      </Form.Item>

      <Form.Item
        label="Rehire Date"
        name="REHIRE_DATE_FOR_WORKING"
        rules={[{ required: true, message: 'Please input the rehire date for working!' }]}
      >
        <DatePicker
          format="MM/DD/YYYY" showTime={false} className='w-full'
          defaultValue={employee && employee.REHIRE_DATE_FOR_WORKING ? dayjs(employee?.REHIRE_DATE_FOR_WORKING) : ''}
        />
      </Form.Item>

      <Form.Item
        label="Termination Date"
        name="TERMINATION_DATE"
        rules={[{ required: true, message: 'Please input the termination date!' }]}
      >
        <DatePicker
          format="MM/DD/YYYY" showTime={false} className='w-full'
          defaultValue={employee && employee.TERMINATION_DATE ? dayjs(employee?.TERMINATION_DATE) : ''}
        />
      </Form.Item>

      <Form.Item
        label="Last Review Date"
        name="LAST_REVIEW_DATE"
        rules={[{ required: true, message: 'Please input the last review date!' }]}
      >
        <DatePicker
          format="MM/DD/YYYY" showTime={false} className='w-full'
          defaultValue={employee && employee.LAST_REVIEW_DATE ? dayjs(employee?.LAST_REVIEW_DATE) : ''}
        />
      </Form.Item>

      <Form.Item
        label="Monthly Working Days Needed"
        name="NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH"
        rules={[{ required: true, message: 'Please input the number of days requirement of working per month!' }
        ]}
      >
        <InputNumber type="number" className='w-full' defaultValue={employee?.NUMBER_DAYS_REQUIREMENT_OF_WORKING_PER_MONTH} />
      </Form.Item>
    </div>
  )
}

export default Employment