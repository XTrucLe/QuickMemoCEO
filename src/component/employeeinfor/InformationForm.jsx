import React from 'react'
import { Form, Button, Layout } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PersonalInformation from './information/PersonalInformation';
import JobInformation from './information/JobInformation';
import ShowNotification from '../notifications/ShowNotifocation';
import BenefitInfor from './information/BenefitInfor';
import WorkingInfor from './information/WorkingInfor';
import EmployeeInformation from './information/EmployeeInformation';

const { Content } = Layout;

const InformationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    ShowNotification({
      message: 'Successfull',
      description: 'Add new information is available',
      type: 'success',
      duration: 1,
    })
  };
  const handleSuccess = () => {
    ShowNotification({
      message: 'Successfull',
      description: 'Add new information is available',
      type: 'success',
      duration: 1,
    })
  }
  return (
    <Layout className="min-w-80 w-11/12 h-full ">
      <p className='w-full mx-6 my-2 font-bold text-3xl'>Add new Employee</p>
      <Content className="h-full m-6 mt-1">
        <Form
          form={form}
          name="add-employee-form"
          onFinish={onFinish}
          layout="vertical"
          className="w-full h-full grid grid-cols-2 gap-5 "
        >

          <div>
            <PersonalInformation />
            <BenefitInfor />
          </div>
          <div>
            <EmployeeInformation />
            <WorkingInfor />
            <JobInformation />
          </div>

          <Form.Item className='col-span-2'>
            <Button
              type="primary"
              htmlType="submit"
              icon={<PlusOutlined />}
              className='bg-slate-700 col-span-2 float-end'
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