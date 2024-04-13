import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    let value = event.target.value;
    setSearchTerm(value.startsWith(' ') ? searchTerm.slice(0, -1) : value)
  }
  
  return (
    <div className='flex border border-black w-80 right-3'>
      <input className=' border-none w-10/12 px-3' placeholder='Nhap de tim kiem' value={searchTerm} onInput={handleSearch} />
      <Link className='grid items-center w-2/12 bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-solid fa-magnifying-glass text-2xl " />
      </Link>
    </div>
  )
}

export default Search