import React from 'react'
import Triangle from '../../component/triangle/Triangle'
import ListCard from '../../component/notifications/ListCard'

const BenefitPlan = () => {
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
        <ListCard />
      </div>
    </div>
  )
}

export default BenefitPlan