import React from 'react'
import Triangle from '../../component/triangle/Triangle'
import ListCard from '../../component/notifications/ListCard'

const BirthDays = () => {
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
        <ListCard/>
      </div>
    </div>
  )
}

export default BirthDays