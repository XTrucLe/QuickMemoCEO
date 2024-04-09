import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faMagnifyingGlass, faFilter, } from '@fortawesome/free-solid-svg-icons'

const HeadEmployee = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const openFilterOption = () => {
    setIsOpenFilter(!isOpenFilter);
    console.log('openFilterOption' + isOpenFilter);
  };
  return (
    <div className='grid grid-cols-2 gap-5'>
      <h2 className=' text-3xl font-bold'>Employee Management</h2>
      <div className='flex justify-center items-center'>
        <Link to='/employee/addNewEmployee'>
          <FontAwesomeIcon icon={faUserPlus} className=' text-3xl px-3 '></FontAwesomeIcon>
        </Link>
        <div className='flex border border-black w-80 right-3'>
          <input className=' border-none w-10/12 px-3' placeholder='Nhap de tim kiem' />
          <Link className='grid items-center w-2/12 bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-solid fa-magnifying-glass text-2xl" />
          </Link>
        </div>
        <FontAwesomeIcon icon={faFilter} className=' font-bold text-2xl mx-2' onClick={openFilterOption}/>
      </div>
    </div>
  )
}

export default HeadEmployee