import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faChartSimple, faDollarSign, faGauge, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import '../menubar/Menubar.css'

const MenuBar = () => {
  return (
    <div className='flex flex-col w-52 h-screen relative ' style={{background:'#404E67'}}>
      <NavLink to='/' className='h-auto w-full'>
      <img className='w-full h-auto pb-1' src={require('../../asset/imgs/LogoQMC.jpeg')} ></img>
      </NavLink>
      <NavLink to='/' className='menuItem'activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faGauge}></FontAwesomeIcon> Dashboard</NavLink>
      <NavLink to='/employee' className='menuItem'activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faUserGroup}></FontAwesomeIcon> Employee</NavLink>
      <NavLink to='/payroll' className='menuItem'activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faDollarSign}></FontAwesomeIcon> Payroll</NavLink>
      <NavLink to='/notification' className='menuItem'activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faBell}></FontAwesomeIcon> Notification</NavLink>
      <NavLink to='/statistical' className='menuItem'activeClassName='active'>
        <FontAwesomeIcon className='w-9' icon={faChartSimple}></FontAwesomeIcon> Statistical</NavLink>    
    </div>
  )
}

export default MenuBar