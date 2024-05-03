import { Button, Form } from 'antd'
import React from 'react'
import PersonalInformation from './../employeeinfor/information/PersonalInformation';
import BenefitInfor from './../employeeinfor/information/BenefitInfor';
import EmployeeInformation from './../employeeinfor/information/EmployeeInformation';
import JobInformation from './../employeeinfor/information/JobInformation';

const Information = ({ componentDisabled, HRM }) => {
    componentDisabled = true
    const finish = () => { }
    return (
        <Form
            layout='horizontal'
            disabled={componentDisabled}
            onFinish={finish}
        >
            {HRM &&
                <>
                    <PersonalInformation />
                    <EmployeeInformation />
                    <BenefitInfor />
                    <JobInformation />
                </>
            }


            {!componentDisabled &&
                <Form.Item className='col-span-2'>
                    <Button
                        type='primary'
                        style={{ backgroundColor: '#1890ff' }}
                    >
                        SEND
                    </Button>
                </Form.Item>
            }
        </Form>
    )
}

export default Information