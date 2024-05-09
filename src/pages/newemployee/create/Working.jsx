import React from 'react'
import { postData } from '../../../api/REST/Post';
import ShowNotification from '../../../component/notifications/ShowNotifocation';
import { Form, Button } from 'antd';
import WorkingInfor from '../../../component/employeeinfor/information/HR_Working';
import { create } from '../../../api';

const AddWorking = () => {
  const onFinish = (value) => {
    const response = postData({ url: create.working, data: value })
    if (!response)
      ShowNotification({
        message: 'Successfully',
        description: 'Added data successfully',
        type: 'success',
        duration: 2
      });
    else
      ShowNotification({
        message: 'Failure',
        description: 'Added data failed',
        type: 'error',
        duration: 2
      });
  }
  return (
    <Form
      layout='horizontal'
      onFinish={onFinish}
    >
      <WorkingInfor />
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

export default AddWorking