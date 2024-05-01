import React from 'react';
import { Modal } from 'antd';

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
          {Object.entries(employee).map(([key, value]) => (
            <p key={key}><strong>{key}:</strong> {value}</p>
          ))}
        </div>
      )}
    </Modal>
  );
};

export default EmployeeModal;
