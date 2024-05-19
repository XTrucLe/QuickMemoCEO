import React, { useEffect, useState } from 'react'
import Triangle from '../../component/triangle/Triangle'
import { Card, notification } from 'antd'
import BirthdayNotification from '../../component/notifications/handleNotifications/Birthday'
import GetData from '../../api/REST/Get'

const BenefitPlan = () => {
  const [notiData, setNotiData] = useState([])
  const newData = GetData({ url: '', dataField: 'data' });
  const listData = BirthdayNotification({ data: newData })

  useEffect(() => {
    setNotiData(listData);
  }, [listData])
  
  // set triangle properties
  const triangle = {
    size: '20px',
    location: '62.5%',
    color: '#fba7b1'
  }
  return (
    <div className='grid grid-cols-1 w-full h-auto'>
      <Triangle size={triangle.size} location={triangle.location} color={triangle.color} />{/* small triangle in top notification container */}
      <div className=' w-full h-screen p-3 rounded-xl' style={{ background: '#fba7b1' }}>{/* container of notifiaction */}
      {notiData.length !== 0 ? notiData.map((notification, index) => (
          <Card key={index} title={notification.title}>
            <p><strong>Name:   </strong>{notification.fullName}</p>
            <p><strong>Date:   </strong>{notification.dateTime}</p>
            <p><strong>Message: </strong>{notification.message}</p>
          </Card>
        )) : <p>No notification for BenefitPlan change notification</p>}
      </div>
    </div>
  )
}

export default BenefitPlan