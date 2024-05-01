import React from 'react';
import { Modal } from 'antd';
import ShowNotification from '../notifications/ShowNotifocation';
import axios from 'axios';

const deleteAPI = '';
const DeleteConfirm = ({ employee, visible, onClose }) => {

  const handleOk = async () => {

    try {
      const response = {
        status: 500,
        data: {
          message: 'Item deleted successfully'
        }
      };
      // = await axios.delete(deleteAPI + `${employee.id}`);


      if (response.status === 200) {
        ShowNotification({
          message: 'Accepted',
          description: 'Đã xóa trường dữ liệu!',
          type: 'success',
          duration: 2
        });
        onClose();
        return true; // Xác nhận việc xóa thành công
      } else {
        ShowNotification({
          message: 'Failed',
          description: 'Failed to delete item!',
          type: 'error',
          duration: 2
        });
        onClose();
        return false; // Xác nhận việc xóa không thành công
      }
    } catch (e) {
      console.error('Error deleting item:', e);
    }
 // Đóng modal khi xác nhận xóa
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