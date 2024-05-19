import { Button, Form } from 'antd'
import React from 'react'
import Personal from './../../../component/employeeinfor/information/HR_Personal';
import { postData } from '../../../api/REST/Post';
import ShowNotification from '../../../component/notifications/ShowNotifocation';
import { create } from '../../../api';

const AddPersonal = () => {
  const onFinish = async(value) => {
    const response = await postData({ url: create.personal, data: value })

    if (response===true)
      ShowNotification({
        message: 'Successfull',
        description: 'Create a new personal is successfull',
        type: 'success',
        duration: 1
      });
    else
      ShowNotification({
        message: 'Failure',
        description: 'Add data failed',
        type: 'error',
        duration: 1
      });
  }
  return (
    <Form
      layout='horizontal'
      onFinish={onFinish}
    >
      <Personal />
      <Form.Item className='col-span-2 float-end'>
        <Button
          type='primary' htmlType='submit'
          style={{ backgroundColor: '#1890ff', width: '84px' }}
        >
          Add
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddPersonal