import React from 'react'
import { Form, Button, Layout } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ShowNotification from '../notifications/ShowNotifocation';
import Personal from './information/HR_Personal';
import Employee from './information/HR_Employment';
import WorkingInfor from './information/HR_Working';
import PrevJob from './information/HR_PrevJob';
import Benefit from './information/HR_Benefit';

const { Content } = Layout;

const InformationForm = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    let values= form.getFieldValue();
    console.log("Received values of form: ", values);
    ShowNotification({
      message: 'Successfull',
      description: 'Add new information is available',
      type: 'success',
      duration: 1,
    })
  };
  // const handleSuccess = () => {
  //   ShowNotification({
  //     message: 'Successfull',
  //     description: 'Add new information is available',
  //     type: 'success',
  //     duration: 1,
  //   })
  // }
  //  const handleAddClick = () => {
  //     form.submit()
  //     console.log(form.getFieldValue())
  //  }
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
            <Personal />
            <Benefit/>
          </div>
          <div>
            <Employee />
            <WorkingInfor />
            <PrevJob />
          </div>

          <Form.Item className='col-span-2'>
            <Button
              type="primary"
              htmlType="submit"
              icon={<PlusOutlined />}
              className='bg-slate-700 col-span-2 float-end'
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