import React, { useState } from 'react';
import { Form, Modal } from 'antd';
import PayRatesForm from '../employeeinfor/information/PR_PayRate';
import Personal from '../employeeinfor/information/HR_Personal';
import PrEmployee from '../employeeinfor/information/PR_Employee';
import Employment from '../employeeinfor/information/HR_Employment';
import PrevJob from './../employeeinfor/information/HR_PrevJob';
import Benefit from './../employeeinfor/information/HR_Benefit';
import WorkingInfor from '../employeeinfor/information/HR_Working';
import { Button } from 'antd';
import { PutData } from './../../api/REST/Put';
import ShowNotification from '../notifications/ShowNotifocation';
import { update } from '../../api';

const EmployeeModal = ({ employee, visible, onClose, isEdit = false }) => {
  //   const [change, setChange] = useState(false)
  //   const [benefitChange, setBenefitChange] = useState(false)
  //   const [personalChange, setPersonalChange] = useState(false)
  //   const [employmentChange, setEmploymentChange] = useState(false)
  //   const [workingInforChange, setWorkingInforChange] = useState(false)
  //   const [prevJobChange, setPrevJobChange] = useState(false)
    
  const onFinish = (value) => {
    if (isEdit) {
      const response = PutData({ url: update.JobHistory, data: value })
      console.table(value)
      if (response === true)
        ShowNotification({
          message: 'Successfully updated',
          description: 'update data is successful',
          type: 'success', duration: 1,
        })
      else
        ShowNotification({
          message: 'Failed to update',
          description: 'update data is error',
          type: 'error', duration: 1,
        })
    }
  }
  return (
    <Modal
      title=<div className='text-xl font-extrabold'>Employee Information</div>
      visible={visible}
      onCancel={onClose}
      footer={[]}
      width={800}
    >
      {employee && (
        <Form
          disabled={!isEdit}
          layout='vertical'
          onFinish={onFinish}
          className='mb-3'
        >
          <Personal employee={employee} />
          <Employment employee={employee} />
          <PrEmployee employee={employee} />
          <WorkingInfor employee={employee} />
          <Benefit employee={employee} />
          <PayRatesForm employee={employee} />
          <PrevJob employee={employee} />

          <Form.Item className='col-span-2'>
            {isEdit && <Button type='primary' ghost htmlType='submit' className='float-end '>Update</Button>}
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};

export default EmployeeModal;
