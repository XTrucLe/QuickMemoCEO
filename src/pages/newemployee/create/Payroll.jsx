import React from 'react'
import ShowNotification from '../../../component/notifications/ShowNotifocation';
import { postData } from '../../../api/REST/Post';
import { Button, Form } from 'antd';
import PrEmployee from '../../../component/employeeinfor/information/PR_Employee';
import PayRates from './../../../component/employeeinfor/information/PR_PayRate';
import { create } from '../../../api';

const AddPayRoll = () => {
  const onFinish =async (value) => {
    const response =await postData({ url: create.payroll, data: value })
    if (response===true)
      ShowNotification({
        message: 'Successfully',
        description: 'Create a new data is successful',
        type: 'success',
        duration: 2
      });
    else
      ShowNotification({
        message: 'Failed',
        description: 'Failed to create a new data',
        type: 'error',
        duration: 2
      });
  }
  return (
    <Form
      layout='horizontal'
      onFinish={onFinish}
    >
      <PrEmployee disableItem={false} />
      <PayRates />

      <Form.Item>
        <Button
          type='primary' htmlType='submit'
          style={{ backgroundColor: '#1890ff', width: '84px' }}>
          Add
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddPayRoll