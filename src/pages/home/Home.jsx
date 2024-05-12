import React from 'react'
import Option from '../../component/DashboardOption/Option'
import Information from '../../component/form/Information'
const Home = () => {
  return (
    <div>
      <div className='flex w-full h-9 mb-1'>
        <h1 className='text-3xl font-bold'>Dashboard</h1>
        <p className='h-full pt-3 pl-1' style={{color: 'rgb(178, 190, 201)'}}>Control panel</p>
      </div>
      {/* option about manager!*/}
      <Option ></Option>
      {/* main chart in dashboard */}
      {/* <Employee /> */}
    </div>

  )
}

export default Home