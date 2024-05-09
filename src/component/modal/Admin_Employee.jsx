import React from 'react';
import { Form, Modal } from 'antd';
import PayRatesForm from '../employeeinfor/information/PR_PayRate';
import Personal from '../employeeinfor/information/HR_Personal';
import PrEmployee from '../employeeinfor/information/PR_Employee';
import Employment from '../employeeinfor/information/HR_Employment';
import PrevJob from './../employeeinfor/information/HR_PrevJob';
import Benefit from './../employeeinfor/information/HR_Benefit';
import WorkingInfor from '../employeeinfor/information/HR_Working';

const EmployeeModal = ({ employee, visible, onClose }) => {
  return (
    <Modal
      title=<div className='text-xl font-extrabold'>Employee Information</div>
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={800}
    >
      {employee && (
        <Form disabled>
          <Personal employee={employee} />
          <Employment employee={employee} />
          <PrEmployee employee={employee} />
          <WorkingInfor employee={employee}/>
          <Benefit employee={employee}/>
          <PayRatesForm employee={employee} />
          <PrevJob employee={employee}/>
        </Form>
      )}
    </Modal>
  );
};

export default EmployeeModal;
