import {React} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Header = ({isSidebarShow, setIsSidebarShow}) => {

  const handleMenuBar = () => {
    setIsSidebarShow(!isSidebarShow);
  }
  return (
    <div className='flex w-full justify-between h-12 px-5 py-3 shadow-lg'>
        <FontAwesomeIcon icon={faBars} onClick={handleMenuBar}></FontAwesomeIcon>
        <Link to='/notification'><FontAwesomeIcon icon={faBell}></FontAwesomeIcon></Link>              
    </div>
  )
}

export default Header