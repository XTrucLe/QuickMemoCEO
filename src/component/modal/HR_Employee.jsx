import { Form, Modal } from 'antd'
import React from 'react'
import Personal from '../employeeinfor/information/HR_Personal'
import PrevJob from '../employeeinfor/information/HR_PrevJob'
import Employee from '../employeeinfor/information/HR_Employment'
import WorkingInfor from '../employeeinfor/information/HR_Working'
import BenefitInfor from '../employeeinfor/information/BenefitInfor'

const HR_Employee = ({ employee, visible, onClose }) => {
    return (
        <Modal
            title=<div className='text-xl font-extrabold'>Employee Information</div>
            visible={visible}
            onCancel={onClose}
        >
            {employee &&
                <Form disabled>
                    <Personal employee={employee} />
                    <Employee employee={employee} />
                    <WorkingInfor employee={employee} />
                    <BenefitInfor employee={employee} />
                    <PrevJob employee={employee} />
                </Form>
            }
        </Modal>
    )
}

export default HR_Employee