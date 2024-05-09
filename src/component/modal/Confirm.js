import React from 'react';
import { Modal } from 'antd';
import ShowNotification from '../notifications/ShowNotifocation';
import axios from 'axios';


const DeleteConfirm = ({ id, deleteAPI, visible, onClose }) => {

  const handleOk = async () => {

    try {
      const response = await axios.delete(`${deleteAPI}/${id}`);
      console.log(response.data)
      if (response.status === 200) {
        ShowNotification({
          message: 'Succeessfull',
          description: 'Employee information is deleted!',
          type: 'success',
          duration: 2
        });
        onClose();//close modal
        return true; // accepted response
        
      } else {
        ShowNotification({
          message: 'Failed',
          description: 'Failed to delete Employee information!',
          type: 'error',
          duration: 2
        });
        onClose();//Close modal
        return false; // 
      }
    } catch (e) {
      console.error('Error deleting item:', e.message);
    }
  };

  const handleCancel = () => {
    ShowNotification({
      message: 'Cancel',
      description: 'Đã hủy việc xóa trường dữ liệu!',
      type: 'info',
      duration: 2
    });
    onClose(); // Đóng modal khi hủy bỏ
  };

  return (
    <Modal
      title="Xác nhận xóa"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okButtonProps={{ type: 'default', backgroundColor: '#1890ff' }}
    >
      <p>Bạn có muốn xóa trường này?</p>
    </Modal>
  );
};

export default DeleteConfirm;