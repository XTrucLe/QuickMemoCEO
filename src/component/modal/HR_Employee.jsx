import { Button, Form, Modal } from 'antd'
import React, { useState } from 'react'
import Personal from '../employeeinfor/information/HR_Personal'
import PrevJob from '../employeeinfor/information/HR_PrevJob'
import WorkingInfor from '../employeeinfor/information/HR_Working'
import Benefit from '../employeeinfor/information/HR_Benefit'
import Employment from '../employeeinfor/information/HR_Employment'
import ShowNotification from '../notifications/ShowNotifocation'
import { PutData } from '../../api/REST/Put'
import { update } from '../../api'

const HrEmployee = ({ employee, visible, onClose, isEdit = false }) => {
    const [change, setChange] = useState(false)
    const [benefitChange, setBenefitChange] = useState(false)
    const [personalChange, setPersonalChange] = useState(false)
    const [employmentChange, setEmploymentChange] = useState(false)
    const [workingInforChange, setWorkingInforChange] = useState(false)
    const [prevJobChange, setPrevJobChange] = useState(false)

    const onFinish = async (value) => {
        if (change) {
            try {
                
                // Gửi request chỉ khi có sự thay đổi
                if (benefitChange) {
                    const responseBenefit = await PutData({ url: update.benefit, data: value });
                    if (responseBenefit === true) {
                        ShowNotification({
                            message: 'Success',
                            description: 'Benefit changes saved successfully',
                            type: 'success',
                            duration: 2
                        });
                        setBenefitChange(false);

                    } else {
                        ShowNotification({
                            message: 'Failed',
                            description: 'Failed to save Benefit changes',
                            type: 'error',
                            duration: 2
                        });
                    }
                }
                if (personalChange) {
                    const responsePersonal = await PutData({ url: update.personal, data: value });
                    console.log('Personal Change Response:', responsePersonal);
                    if (responsePersonal === true) {
                        ShowNotification({
                            message: 'Success',
                            description: 'Personal changes saved successfully',
                            type: 'success',
                            duration: 2
                        });
                        setPersonalChange(false);

                    } else {
                        ShowNotification({
                            message: 'Failed',
                            description: 'Failed to save Personal changes',
                            type: 'error',
                            duration: 2
                        });
                    }
                }
                if (employmentChange) {
                    const responseEmployment = await PutData({ url: update.employment, data: value });
                    console.log('Employment Change Response:', responseEmployment);
                    if (responseEmployment === true) {
                        ShowNotification({
                            message: 'Success',
                            description: 'Employment changes saved successfully',
                            type: 'success',
                            duration: 1
                        });
                        setEmploymentChange(false);

                    } else {
                        ShowNotification({
                            message: 'Failed',
                            description: 'Failed to save Employment changes',
                            type: 'error',
                            duration: 1
                        });
                    }
                }
                if (workingInforChange) {
                    const responseWorkingInfor = await PutData({ url: update.working, data: value });
                    console.log('Working Information Change Response:', responseWorkingInfor);
                    if (responseWorkingInfor === true) {
                        ShowNotification({
                            message: 'Success',
                            description: 'Working Information changes saved successfully',
                            type: 'success',
                            duration: 1
                        });
                        setWorkingInforChange(false);
                    } else {
                        ShowNotification({
                            message: 'Failed',
                            description: 'Failed to save Working Information changes',
                            type: 'error',
                            duration: 1
                        });
                    }
                }
                if (prevJobChange) {
                    const responsePrevJob = await PutData({ url: update.JobHistory, data: value });
                    console.log('Previous Job Change Response:', responsePrevJob);
                    if (responsePrevJob === true) {
                        ShowNotification({
                            message: 'Success',
                            description: 'Previous Job changes saved successfully',
                            type: 'success',
                            duration: 1
                        });
                        setPrevJobChange(false);

                    } else {
                        ShowNotification({
                            message: 'Failed',
                            description: 'Failed to save Previous Job changes',
                            type: 'error',
                            duration: 1
                        });
                    }
                }
                if (!change && !benefitChange && !personalChange && !employmentChange && !workingInforChange && !prevJobChange)
                    setChange(false);

                // Hiển thị thông báo thành công
                ShowNotification({
                    message: 'Success',
                    description: 'Changes saved successfully',
                    type: 'success',
                    duration: 1
                });
            } catch (error) {
                ShowNotification({
                    message: 'Failed',
                    description: 'Did not save changes',
                    type: 'error',
                    duration: 1
                })
            }
        } else
            ShowNotification({
                message: 'Failed',
                description: 'Dont have a changes',
                type: 'error',
                duration: 1
            })
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
                    <Personal onChange={setPersonalChange} employee={employee} />
                    <Employment onChange={setEmploymentChange} employee={employee} />
                    <WorkingInfor onChange={setWorkingInforChange} employee={employee} />
                    <Benefit onChange={setBenefitChange} employee={employee} />
                    <PrevJob onChange={setPrevJobChange} employee={employee} />
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