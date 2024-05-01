import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faFilter, } from '@fortawesome/free-solid-svg-icons'
import Search from '../../search/Search';

const HeadEmployee = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const openFilterOption = () => {
    setIsOpenFilter(!isOpenFilter);
  };
  return (
    <div className='grid grid-cols-2 gap-5'>
      <h2 className=' text-3xl font-bold'>Employee Management</h2>
      <div className='flex justify-end items-center'>
        <Link to='/newEmployee'>
          <FontAwesomeIcon icon={faUserPlus} className=' text-3xl px-3 '></FontAwesomeIcon>
        </Link>
        <Search />
        <FontAwesomeIcon icon={faFilter} className=' font-bold text-2xl mx-2' onClick={openFilterOption} />
      </div>
    </div>
  )
}

export default HeadEmployee