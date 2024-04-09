import React from 'react'
import Triangle from '../../component/triangle/Triangle'
import NotificationCard from '../../component/notifications/NotificationCards/NotificationCard'


const Notification = () => {
  // set triangle properties
  const triangle = {
    size: '20px',
    location: '12.5%',
    color: '#cceaf5'
  }
  return (
    <div className='grid grid-cols-1 w-full h-auto'>
      {/* small triangle in top notification container */}
      <Triangle size={triangle.size} location={triangle.location} color={triangle.color} />
      {/* container of notifiaction */}
      <div className=' w-full h-full p-3 rounded-xl' style={{ background: '#cceaf5' }}>
        <NotificationCard />
      </div>
    </div>
  )
}

export default Notification