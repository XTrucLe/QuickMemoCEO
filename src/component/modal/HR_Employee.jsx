import { Button, Form, Modal } from 'antd'
import React from 'react'
import Personal from '../employeeinfor/information/HR_Personal'
import PrevJob from '../employeeinfor/information/HR_PrevJob'
import WorkingInfor from '../employeeinfor/information/HR_Working'
import Benefit from '../employeeinfor/information/HR_Benefit'
import Employment from '../employeeinfor/information/HR_Employment'

const HrEmployee = ({ employee, visible, onClose, isEdit = false }) => {
    const onFinish = (value) => {
        if(!isEdit){
            try {
                
            } catch (error) {
                
            }
        }
    }
    return (
        <Modal
            title=<div className='text-xl font-extrabold'>Employee Information</div>
            visible={visible}
            onCancel={onClose}
        >
            {employee &&
                <Form
                    disabled={!isEdit}
                    layout='vertical'
                    onFinish={onFinish}
                >
                    <Personal employee={employee} />
                    <Employment employee={employee} />
                    <WorkingInfor employee={employee} />
                    <Benefit employee={employee} />
                    <PrevJob employee={employee} />
                    <Form.Item className=''>
                        {isEdit &&
                            <Button
                                type='primary' ghost htmlType='submit'
                                className='float-end'
                            >
                                update
                            </Button>
                        }
                    </Form.Item>
                </Form>
            }
        </Modal>
    )
}

export default HrEmployee