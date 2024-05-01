import { React, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SearchContext } from '../../layout/Layout'
import { employeeAPI } from '../../api'


const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext)

  const handleSearch = (event) => {
    let value = event.target.value;
    setSearchTerm(value.startsWith(' ') ? searchTerm.slice(0, -1) : value)
  }
  // const url = `${employeeAPI}search?term=${encodeURIComponent(searchTerm)}`;

  // // Gửi yêu cầu GET đến Backend
  // fetch(url)
  //   .then(response => {
  //     // Xử lý phản hồi từ Backend
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json(); // Trả về dữ liệu JSON từ phản hồi
  //   })
  //   .then(data => {
  //     // Xử lý dữ liệu từ Backend
  //     console.log(data); // In dữ liệu ra console
  //     // Tiếp tục xử lý dữ liệu ở đây (ví dụ: hiển thị kết quả trên giao diện người dùng)
  //   })
  //   .catch(error => {
  //     // Xử lý lỗi
  //     console.error('There was a problem with the fetch operation:', error);
  //   });

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