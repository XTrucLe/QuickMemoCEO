import React from 'react'
import Layout from '../Layout'
import SideBar from '../../component/sidebar/SideBar'
import HeadManager from '../../component/headerContent/headManage/HeadManager'

const MangerLayout = ({children}) => {
  return (
    <Layout
      sidebar={<SideBar />}
      children={
      <>
        <HeadManager/>
        {children}
      </>}
    />
  )
}

export default MangerLayout