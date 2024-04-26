import React from 'react'
import { Form, Input, Button, Layout, InputNumber } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PersonalInformation from './information/PersonalInformation';
import JobInformation from './information/JobInformation';
import ShowNotification from '../notifications/ShowNotifocation';

const { Content } = Layout;

const InformationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    ShowNotification({
      message: 'Successfull',
      description: 'Add new information is available',
      type: 'success',
      duration:1,
    })
  };
  const handleSuccess = () => {
    ShowNotification({
      message: 'Successfull',
      description: 'Add new information is available',
      type: 'success',
      duration:1,
    })
  }
  return (
    <Layout className="min-w-80 w-10/12 h-full ">
    <p className='w-full mx-6 my-2 font-bold text-3xl'>Add new Employee</p>
      <Content className="h-full m-6 mt-1">
        <Form
          form={form}
          name="add-employee-form"
          onFinish={onFinish}
          layout="vertical"
          className="w-full h-full "
        >
          <PersonalInformation />
 
          <JobInformation />
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<PlusOutlined />}
              className='bg-slate-700'
              onClick={handleSuccess}
            >
              Add Employee
            </Button>
          </Form.Item>
        </Form>

      </Content>
    </Layout>
  );
};

export default InformationForm