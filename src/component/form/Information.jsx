import { Button, Form } from 'antd'
import React from 'react'
import JobInformation from '../employeeinfor/information/HR_PrevJob';
import Benefit from '../employeeinfor/information/HR_Benefit';
import Personal from '../employeeinfor/information/HR_Personal';
import Employee from '../employeeinfor/information/HR_Employment';

const Information = ({ componentDisabled, HRM }) => {
    componentDisabled = true
    const finish = (value) => { 
        
    }
    return (
        <Form
            layout='horizontal'
            disabled={componentDisabled}
            onFinish={finish}
        >
            {HRM &&
                <>
                    <Personal />
                    <Employee />
                    <Benefit />
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