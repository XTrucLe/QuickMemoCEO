import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import ShowNotification from '../notifications/ShowNotifocation';

const DeleteConfirm = (setConfirm) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirm=true
    ShowNotification({
        message: 'Accepted',
        description:'Đã xóa trường dữ liệu!',
        type:'success',
        duration:2
    })
    setVisible(false);
  };

  const handleCancel = () => {
    ShowNotification({
        message: 'Cancel',
        description:'Đã hủy việc xóa trường dữ liệu!',
        type:'info',
        duration:2
    })
    setVisible(false);
  };

  return (
    <div>
      <Button type="text" onClick={showModal}>
        Mở Modal
      </Button>
      <Modal
        title="Xác nhận xóa"
        visible={visible}
        onOk={handleOk}
        okButtonProps={{type:'default', backgroundColor:' #1890ff'}}
        onCancel={handleCancel}
      >
        <p>Bạn có muốn xóa trường này?</p>
      </Modal>
    </div>
  );
};

export default DeleteConfirm;