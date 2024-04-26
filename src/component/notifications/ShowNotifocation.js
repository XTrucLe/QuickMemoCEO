import React from 'react';
import { notification } from 'antd';

const ShowNotification = (props) => {
  const { message, description, type, duration, onClose, ...rest } = props;

  const notificationType = {
    success: {
      color: '#52c41a',
    },
    error: {
      color: '#ff4d4f',
    },
    warning: {
      color: '#faad14',
    },
    info: {
      color: '#1890ff',
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
      <div className='w-full h-auto font-bold px-3' style={{ background: notificationType.color }}>
        {message}
      </div>
    ),
    description: (
      <div style={{padding:'0 12px', fontWeight: 'normal', zIndex: 11, background: '#FFF' }}>
        {description}
      </div>
    ),
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