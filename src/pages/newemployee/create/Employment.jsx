import React from 'react'
import ShowNotification from '../../../component/notifications/ShowNotifocation';
import { postData } from '../../../api/REST/Post';
import { Button, Form } from 'antd';
import Employment from '../../../component/employeeinfor/information/HR_Employment';
import { create } from '../../../api';

const AddEmployment = () => {
  const onFinish = (value) => {
    const response= postData({url:create.working , data: value})
    if (!response)
      ShowNotification({
        message: 'Successfully',
        description: 'Successfully created new employee',
        type: 'success',
        duration: 2
      });
    else
      ShowNotification({
        message: 'Failed',
        description: 'Failed to create employee',
        type: 'error',
        duration: 2
      });
  }
  return (
    <Form
    layout='horizontal'
    onFinish={onFinish}
    >
      <Employment disableItem={false} onChange/>
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

export default AddEmployment