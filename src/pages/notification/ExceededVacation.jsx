import React, { useEffect, useState } from 'react'
import Triangle from '../../component/triangle/Triangle'
import { Card } from 'antd'
import GetData from '../../api/REST/Get'
import { notification } from '../../api'
import { VacaitionExceeded } from '../../component/notifications/handleNotifications/Vacation'

const ExceededVacation = () => {
  const [notiData, setNotiData] = useState([])
  const newData = GetData({ url: notification.exceeded_vacation, dataField: 'data' })

  useEffect(() => {
    setNotiData(VacaitionExceeded({ employee: newData }))
  }, [newData])
  // set triangle properties
  const triangle = {
    size: '20px',
    location: '37.5%',
    color: '#f3b89b'
  }
  return (
    <div className='grid grid-cols-1 w-full h-auto'>
      <Triangle size={triangle.size} location={triangle.location} color={triangle.color} />{/* small triangle in top notification container */}
      <div className=' w-full h-screen p-3 rounded-xl' style={{ background: '#f3b89b' }}>{/* container of notifiaction */}
        {notiData.length!==0 ? (notiData.map((notification, index) => (
          <Card key={index} title={notification.title} className='mb-2'>
            <p><strong>Full name:   </strong>{notification.FullName}</p>
            <p><strong>Date create:   </strong>{notification.notiDate}</p>
            <p><strong>Message: </strong>{notification.message}</p>
          </Card>
        ))) :
          <p>No notification for Exceeded Vacations</p>
        }
      </div>
    </div>
  )
}

export default ExceededVacation