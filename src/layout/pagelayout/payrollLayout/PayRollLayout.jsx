import React from 'react'
import Layout from '../../Layout'
import SideBar from '../../../component/sidebar/SideBar'

const PayRollLayout = ({children}) => {
  return (
    <Layout 
      sidebar={SideBar}
      children={children}
    />
  )
}

export default PayRollLayout