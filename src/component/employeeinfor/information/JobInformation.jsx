import { DatePicker, Form, Input } from 'antd'
import React from 'react'

const JobInformation = () => {
    return (
        <div className='grid grid-cols-2 w-full gap-x-5'>
            <p className='p-2 col-span-2 bg-green-500 mb-1'>Previous job information</p>
            <Form.Item
                label="Job History ID"
                name="jobHistoryId"
                rules={[{ required: true, message: 'Please input the job history ID!' }]}
            >
                <Input className='w-full' />
            </Form.Item>

            <Form.Item
                label="Department"
                name="department"
                rules={[{ required: true, message: 'Please input the department!' }]}
            >
                <Input className='w-full' />
            </Form.Item>

            <Form.Item
                label="Division"
                name="division"
                rules={[{ required: true, message: 'Please input the division!' }]}
            >
                <Input className='w-full' />
            </Form.Item>

            <Form.Item
                label="From Date"
                name="fromDate"
                rules={[{ required: true, message: 'Please input the from date!' }]}
            >
                <DatePicker className='w-full' />
            </Form.Item>

            <Form.Item
                label="Thru Date"
                name="thruDate"
                rules={[{ required: true, message: 'Please input the thru date!' },
                ({ getFieldValue }) => ({
                    validator(rule, value) {
                        if (!value || getFieldValue('fromDate') <= value) {
                            return Promise.resolve();
                        }
                        return Promise.reject('Thru date must be on or after from date!');
                    },
                }),
                ]}
            >
                <DatePicker className='w-full' />
            </Form.Item>

            <Form.Item
                label="Job Title"
                name="jobTitle"
                rules={[{ required: true, message: 'Please input the job title!' }]}
            >
                <Input className='w-full' />
            </Form.Item>

            <Form.Item
                label="Supervisor"
                name="supervisor"
                rules={[{ required: true, message: 'Please input the supervisor!' }]}
            >
                <Input className='w-full' />
            </Form.Item>

            <Form.Item
                label="Location"
                name="location"
                rules={[{ required: true, message: 'Please input the location!' }]}
            >
                <Input className='w-full' />
            </Form.Item>

            <Form.Item
                label="Type of Work"
                name="typeOfWork"
                rules={[{ required: true, message: 'Please input the type of work!' }]}
            >
                <Input className='w-full' />
            </Form.Item>
        </div>
    )
}

export default JobInformation