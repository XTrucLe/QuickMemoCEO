import React from 'react'
import { DatePicker, Form, Input } from 'antd'
import dayjs from 'dayjs';

const PrevJob = ({ employee, onChange }) => {
    const setChange = () => {
        if (onChange)
            onChange(true)
    }
    return (
        <div className='grid grid-cols-2 w-full gap-x-5 mb-auto'>
            <p className='p-2 col-span-2 bg-green-500 mb-1'>Previous job information</p>
            {/* list form item for Previous job */}
            <Form.Item
                label="Job History ID"
                name="JOB_HISTORY_ID"
                rules={employee?.JOB_HISTORY_ID ? [] : [{ required: true, message: 'Please input the job history ID!' }]}
            >
                <Input className='w-full' onChange={setChange} defaultValue={employee?.JOB_HISTORY_ID} />
            </Form.Item>

            <Form.Item
                label="Department"
                name="DEPARTMENT"
                rules={employee?.DEPARTMENT ? [] : [{ required: true, message: 'Please input the department!' }]}
            >
                <Input className='w-full' onChange={setChange} defaultValue={employee?.DEPARTMENT} />
            </Form.Item>

            <Form.Item
                label="Division"
                name="DIVISION"
                rules={employee?.DIVISION ? [] : [{ required: true, message: 'Please input the division!' }]}
            >
                <Input className='w-full' onChange={setChange} defaultValue={employee?.DIVISION} />
            </Form.Item>

            <Form.Item
                label="From Date"
                name="FROM_DATE"
                rules={employee?.FROM_DATE ? [] : [{ required: true, message: 'Please input the from date!' },
                //set rule days need before today
                ({ getFieldValue }) => ({
                    validator(rule, value) {
                        if (new Date(value).getTime() <= new Date().getTime())
                            return Promise.resolve();
                        else {
                            return Promise.reject('From date must be before today!');
                        }
                    },
                }),]}
            >
                <Input
                    type="date"
                    className='w-full'
                    
                    onChange={e => setChange(e.target.value ? dayjs(e.target.value).format("YYYY-MM-DD") : '')}
                    defaultValue={employee && employee.FROM_DATE ? dayjs(employee.FROM_DATE).format("YYYY-MM-DD") : ''}
                />
            </Form.Item>

            <Form.Item
                label="Thru Date"
                name="THRU_DATE"
                rules={employee?.THRU_DATE ? [] : [
                    { required: true, message: 'Please input the thru date!' },
                    // Set rule is after From_date and before today
                    ({ getFieldValue }) => ({
                        async validator(rule, value) {
                            const fromDate = getFieldValue('fromDate');

                            // Nếu không có ngày bắt đầu, hoặc ngày kết thúc trước hoặc bằng ngày bắt đầu, trả về hợp lệ
                            if (!fromDate || new Date(fromDate).getTime() <= new Date(value).getTime()) {
                                // Nếu ngày kết thúc không được cung cấp hoặc nằm trước ngày hiện tại, trả về hợp lệ
                                if (!value || new Date(value).getTime() <= new Date().getTime()) {
                                    return Promise.resolve();
                                } else {
                                    return Promise.reject('Thru date must be before today!');
                                }
                            } else {
                                return Promise.reject('Thru date must be after from date!');
                            }
                        },
                    }),
                ]}
            >
                <Input
                    type="date"
                    className='w-full'
                    onChange={e => setChange(e.target.value ? dayjs(e.target.value).format("YYYY-MM-DD") : '')}
                    defaultValue={employee && employee.THRU_DATE ? dayjs(employee.THRU_DATE).format("YYYY-MM-DD") : ''}
                />
            </Form.Item>

            <Form.Item
                label="Job Title"
                name="JOB_TITLE"
                rules={employee?.JOB_TITLE ? [] : [{ required: true, message: 'Please input the job title!' }]}
            >
                <Input className='w-full' onChange={setChange} defaultValue={employee?.JOB_TITLE} />
            </Form.Item>

            <Form.Item
                label="Supervisor"
                name="SUPERVISOR"
                rules={employee?.SUPERVISOR ? [] : [{ required: true, message: 'Please input the supervisor!' }]}
            >
                <Input className='w-full' onChange={setChange} defaultValue={employee?.SUPERVISOR} />
            </Form.Item>

            <Form.Item
                label="Location"
                name="LOCATION"
                rules={employee?.LOCATION ? [] : [{ required: true, message: 'Please input the location!' }]}
            >
                <Input className='w-full' onChange={setChange} defaultValue={employee?.LOCATION} />
            </Form.Item>

            <Form.Item
                label="Type of Work"
                name="TYPE_OF_WORKS"
                rules={employee?.TYPE_OF_WORKS ? [] : [{ required: true, message: 'Please input the type of work!' }]}
            >
                <Input className='w-full' onChange={setChange} defaultValue={employee?.TYPE_OF_WORK} />
            </Form.Item>
        </div>
    )
}

export default PrevJob
