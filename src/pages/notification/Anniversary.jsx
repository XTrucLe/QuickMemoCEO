import React, { useEffect, useState } from 'react'
import Triangle from '../../component/triangle/Triangle'
import GetData from './../../api/REST/Get';
import { notification } from '../../api';
import EmployeeAnniversary from '../../component/notifications/handleNotifications/Aniversary';
import { Card } from 'antd';


const AniversaryReminders = () => {
  const [notiData, setNotiData] = useState([])
  const newData = GetData({ url: notification.aniversary, dataField: 'data' })

  useEffect(() => {
    setNotiData(EmployeeAnniversary({ employee: newData }))
  }, [newData])
  // set triangle properties
  const triangle = {
    size: '20px',
    location: '12.5%',
    color: '#cceaf5'
  }
  return (
    <div className='grid grid-cols-1 w-full h-auto'>
      <Triangle size={triangle.size} location={triangle.location} color={triangle.color} />{/* small triangle in top notification container */}
      <div className=' w-full h-screen p-3 rounded-xl' style={{ background: '#cceaf5' }}>{/* container of notifiaction */}
        {notiData.length!==0 ? (notiData.map((notification, index) => (
          <Card key={index} title={notification.title} className='mb-2'>
            <p><strong>Name:   </strong>{notification.FullName}</p>
            <p><strong>Date:   </strong>{notification.anniversaryDate}</p>
            <p><strong>Department:   </strong>{notification.Department}</p>
            <p><strong>Message: </strong>{notification.message}</p>
          </Card>
        ))) :
          <p>No notification for Aniversary Reminders</p>
        }
      </div>
    </div>
  )
}

export default AniversaryReminders