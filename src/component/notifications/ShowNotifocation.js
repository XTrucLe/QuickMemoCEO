import React from 'react';
import { notification } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';


const ShowNotification = (props) => {
  const { message, description, type, duration, onClose, ...rest } = props;

  const notificationType = {
    success: {
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
    },
    error: {
      icon: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
    },
    warning: {
      icon: <ExclamationCircleOutlined style={{ color: '#faad14' }} />,
    },
    info: {
      icon: <InfoCircleOutlined style={{ color: '#1890ff' }} />,
    },
  }[type];

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    notification.destroy();
  };

  return notification.open({
    message: (
      <div className='w-full h-auto font-bold px-3' >
        {message}
      </div>
    ),
    description: (
      <div style={{padding:'0 12px', fontWeight: 'normal', zIndex: 11, background: '#FFF' }}>
        {description}
      </div>
    ),
    icon: notificationType.icon,
    placement: 'topRight',
    style: {
      paddingLeft:'-5px'
    },
    duration,
    onClose: handleClose,
    ...rest,
  });
};

export default ShowNotification;