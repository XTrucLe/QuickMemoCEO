import React from 'react'
import Search from '../../search/Search'
import ManagerOverview from '../../manage/ManagerOverview'
import { Link } from 'react-router-dom'

const HeadManager = () => {
    
    return (
        <div>
            <div className='flex flex-grow justify-between'>
                <h1 className=' text-3xl font-bold'> Management</h1>
                <div className='flex ml-auto mr-2'>
                    <Link to='/manage/newemployee'
                        className='mr-2 p-2 rounded-xl border bg-blue-700 text-cyan-50 font-bold'
                    >
                        Add new Employee
                    </Link>
                    <Search />
                </div>
            </div>
            <ManagerOverview/>
        </div>
    )
}

export default HeadManager