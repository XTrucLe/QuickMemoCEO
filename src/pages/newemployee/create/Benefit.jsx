import React from 'react'
import ShowNotification from '../../../component/notifications/ShowNotifocation';
import { postData } from '../../../api/REST/Post';
import { Button, Form } from 'antd';
import { create } from '../../../api';
import Benefit from '../../../component/employeeinfor/information/HR_Benefit';

const AddBenefit = () => {
  const onFinish = async (value) => {
    const response = await postData({ url: create.benefit, data: value })
    if (response === true)
      ShowNotification({
        message: 'Successfully',
        description: 'Successfully created new benefit',
        type: 'success',
        duration: 2
      });
    else
      ShowNotification({
        message: 'Failed',
        description: 'Failed to create benefit',
        type: 'error',
        duration: 2
      });
  }
  return (
    <Form
      layout='horizontal'
      onFinish={onFinish}
    >
      <Benefit />
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

export default AddBenefit