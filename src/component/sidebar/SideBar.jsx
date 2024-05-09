import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faChartSimple, faDollarSign, faGauge, faUserGroup, faUserSecret } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {

  return (
    <div className=' flex flex-col w-52 h-screen  ' style={{ background: '#404E67' }}>
    
      {/* images of the app */}
      <NavLink to='/' className='h-auto w-full mb-1'>
        <img className='w-full h-auto' alt='logo of Quick Memo CEO page' src={require('../../asset/imgs/LogoQMC.jpeg')} ></img>
      </NavLink>

      {/*List of link pages*/}
      <NavLink to='/' className='menuItem' activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faGauge}></FontAwesomeIcon> Dashboard</NavLink>

      <NavLink to='/employee' className='menuItem' activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faUserGroup}></FontAwesomeIcon> Employee</NavLink>

      <NavLink to='/payroll' className='menuItem' activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faDollarSign}></FontAwesomeIcon> Payroll</NavLink>

      <NavLink to='/notification' className='menuItem' activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faBell}></FontAwesomeIcon> Notification</NavLink>

      <NavLink to='/statistical' className='menuItem' activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faChartSimple}></FontAwesomeIcon> Statistical</NavLink>

      <NavLink to='/manage' className='menuItem' activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faUserSecret}></FontAwesomeIcon> Managerment</NavLink>
    </div>
  )
}

export default SideBar