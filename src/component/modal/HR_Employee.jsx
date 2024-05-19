import { Button, Form, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import Personal from '../employeeinfor/information/HR_Personal'
import PrevJob from '../employeeinfor/information/HR_PrevJob'
import WorkingInfor from '../employeeinfor/information/HR_Working'
import Benefit from '../employeeinfor/information/HR_Benefit'
import Employment from '../employeeinfor/information/HR_Employment'
import ShowNotification from '../notifications/ShowNotifocation'
import { handleAlert } from './HandleAlert'
import { PutData } from '../../api/REST/Put'
import { update } from '../../api'

export const mergeObjects = (obj1, obj2) => {
    const result = {};
    for (const key in obj1) {
        if (obj2.hasOwnProperty(key) && obj2[key] !== null && obj2[key] !== undefined) {
            result[key] = obj2[key];
        } else {
            result[key] = obj1[key];
        }
    }
    return result;
};
const HrEmployee = ({ employee, visible, onClose, isEdit = false }) => {
    const [change, setChange] = useState(false)
    const [initialValues, setInitialValues] = useState({});

    useEffect(() => {
        if (employee) {
            setInitialValues(employee); // Thiết lập giá trị mặc định từ employee
            console.log(initialValues)
        }
    }, [employee, initialValues]);
    const onFinish = async (value) => {
        const combinedValues = mergeObjects(initialValues, value); // Combine default and changed values
        console.log(initialValues, value, 'combine', combinedValues)
        if (change) {
            const res = await PutData({ url: update.all, data: combinedValues, id: initialValues.PERSONAL_ID })
            console.log(res)
        }
        else {
            ShowNotification({
                message: 'Failed',
                description: 'Dont have a changes',
                type: 'error',
                duration: 1
            })
        }
    }
    const handleValuesChange = (value) => setChange(true)
    return (
        <Modal
            title=<div className='text-xl font-extrabold'>Employee Information</div>
            visible={visible}
            onCancel={onClose}
            footer={[]}
            width={820}
        >
            {employee &&
                <Form
                    disabled={!isEdit}
                    layout='vertical'
                    onValuesChange={handleValuesChange}
                    onFinish={onFinish}
                >
                    <Personal employee={employee} />
                    <Employment employee={employee} />
                    <WorkingInfor employee={employee} />
                    {!isEdit &&(<Benefit employee={employee} />)}
                    <PrevJob employee={employee} />
                    <Form.Item className='col-span-2'>
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