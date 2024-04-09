import React from 'react'
import Option from '../../component/DashboardOption/Option'
const Home = () => {
  return (
    <div>
      <div className='flex w-full h-9 mb-1'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <p className='h-full pt-3 pl-1' style={{color: 'rgb(178, 190, 201)'}}>Control panel</p>
      </div>
      <Option ></Option>
    
    </div>

  )
}

export default Home