import React from 'react';
import { Form, Input, Modal } from 'antd';

const EmployeeModal = ({ employee, visible, onClose }) => {
  return (
    <Modal
      title=<div className='text-xl font-extrabold'>Employee Information</div>
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      {employee && (
        <div className='text-lg text-gray-600 grid grid-cols-2'>
          <p><strong>ID Employee:</strong> {employee.idEmployee}</p>
          <p><strong>Employee Number:</strong> {employee["Employee Number"]}</p>
          <p><strong>Last Name:</strong> {employee["Last Name"]}</p>
          <p><strong>First Name:</strong> {employee["First Name"]}</p>
          <p><strong>SSN:</strong> {employee['SSN']}</p>
          <p><strong>Pay Rate:</strong> {employee["Pay Rate"]}</p>
          <p><strong>Vacation Days:</strong> {employee["Vacation Days"]}</p>
          <p><strong>Paid To Date:</strong> {employee["Paid To Date"]}</p>
          <p><strong>Paid Last Year:</strong> {employee["Paid Last Year"]}</p>
          {/* Thêm các trường khác nếu cần */}
        </div>
      )}
    </Modal>
  );
};

export default EmployeeModal;
