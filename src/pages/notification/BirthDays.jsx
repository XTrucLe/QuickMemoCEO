import React, { useEffect, useState } from 'react'
import Triangle from '../../component/triangle/Triangle'
import GetData from '../../api/REST/Get'
import { notification } from '../../api'
import BirthdayNotification from '../../component/notifications/handleNotifications/Birthday'
import { Card } from 'antd';

const BirthDays = () => {
  const [notiData, setNotiData] = useState([])
  const newData = GetData({ url: notification.birthDay, dataField: 'data' });
  const listData = BirthdayNotification({ data: newData })

  useEffect(() => {
    setNotiData(listData);
  }, [listData])
  // set triangle properties
  const triangle = {
    size: '20px',
    location: '87.5%',
    color: '#b3fce6'
  }
  return (
    <div className='grid grid-cols-1 w-full h-auto'>
      <Triangle size={triangle.size} location={triangle.location} color={triangle.color} />{/* small triangle in top notification container */}
      <div className=' w-full h-screen p-3 rounded-xl' style={{ background: '#b3fce6' }}>{/* container of notifiaction */}
        {notiData.length !== 0 ? notiData.map((notification, index) => (
          <Card key={index} title={notification.title}>
            <p><strong>Name:   </strong>{notification.fullName}</p>
            <p><strong>Date:   </strong>{notification.dateTime}</p>
            <p><strong>Message: </strong>{notification.message}</p>
          </Card>
        )) : <p>No notification for Birthdays notification</p>}
      </div>
    </div>
  )
}

export default BirthDays