import { DatePicker, Form, Input } from 'antd'
import React, { useState } from 'react'

const JobInformation = () => {
    const [employee] = useState({
        JOB_HISTORY_ID: '12345',
        DEPARTMENT: 'Marketing',
        DIVISION: 'Sales',
        FROM_DATE: '',
        THRU_DATE: '',
        JOB_TITLE: 'Senior Manager',
        SUPERVISOR: 'John Doe',
        LOCATION: 'New York',
        typeOfWork: 'Full-time'
    });
    return (
        <div className='grid grid-cols-2 w-full gap-x-5 mb-auto'>
            <p className='p-2 col-span-2 bg-green-500 mb-1'>Previous job information</p>
            <Form.Item
                label="Job History ID"
                name="JOB_HISTORY_ID"
                rules={[{ required: true, message: 'Please input the job history ID!' }]}
            >
                <Input className='w-full' defaultValue={employee?.JOB_HISTORY_ID} />
            </Form.Item>

            <Form.Item
                label="Department"
                name="DEPARTMENT"
                rules={[{ required: true, message: 'Please input the department!' }]}
            >
                <Input className='w-full' defaultValue={employee?.DEPARTMENT}/>
            </Form.Item>

            <Form.Item
                label="Division"
                name="DIVISION"
                rules={[{ required: true, message: 'Please input the division!' }]}
            >
                <Input className='w-full' defaultValue={employee?.DIVISION}/>
            </Form.Item>

            <Form.Item
                label="From Date"
                name="FROM_DATE"
                rules={[{ required: true, message: 'Please input the from date!' },
                ({ getFieldValue }) => ({
                    validator(rule, value) {
                        if (new Date(value).getTime() <= new Date().getTime())
                            return Promise.resolve();
                        else {
                            return Promise.reject('Thru date must be before today!');
                        }
                    },
                }),]}
            >
                <DatePicker className='w-full' disabledTime defaultValue={employee?.FROM_DATE}/>
            </Form.Item>

            <Form.Item
                label="Thru Date"
                name="THRU_DATE"
                rules={[{ required: true, message: 'Please input the thru date!' },
                ({ getFieldValue }) => ({
                    validator(rule, value) {
                        if (!value || getFieldValue('fromDate') <= value) {
                            if (new Date(value).getTime() <= new Date().getTime())
                                return Promise.resolve();
                            else {
                                return Promise.reject('Thru date must be before today!');
                            }
                        }
                        return;
                    },
                }),
                ]}
            >
                <DatePicker className='w-full' disabledTime defaultValue={employee?.THRU_DATE}/>
            </Form.Item>

            <Form.Item
                label="Job Title"
                name="JOB_TITLE"
                rules={[{ required: true, message: 'Please input the job title!' }]}
            >
                <Input className='w-full' defaultValue={employee?.JOB_TITLE}/>
            </Form.Item>

            <Form.Item
                label="Supervisor"
                name="SUPERVISOR"
                rules={[{ required: true, message: 'Please input the supervisor!' }]}
            >
                <Input className='w-full' defaultValue={employee?.SUPERVISOR}/>
            </Form.Item>

            <Form.Item
                label="Location"
                name="LOCATION"
                rules={[{ required: true, message: 'Please input the location!' }]}
            >
                <Input className='w-full' defaultValue={employee?.LOCATION}/>
            </Form.Item>

            <Form.Item
                label="Type of Work"
                name="typeOfWork"
                rules={[{ required: true, message: 'Please input the type of work!' }]}
            >
                <Input className='w-full' defaultValue={employee?.typeOfWork}/>
            </Form.Item>
        </div>
    )
}

export default JobInformation