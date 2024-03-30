import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex w-full justify-between h-auto px-5 py-3'>
        <Link to='/'><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></Link>
        <Link to='/notification'><FontAwesomeIcon icon={faBell}></FontAwesomeIcon></Link>
        
    </div>
  )
}

export default Header