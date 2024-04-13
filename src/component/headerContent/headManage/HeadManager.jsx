import React from 'react'
import Table from '../../dataTable/Employee/Table'
import Search from '../../search/Search'
import ManagerOverview from '../../manage/ManagerOverview'

const HeadManager = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <h1 className=' text-3xl font-bold'> Management</h1>
                <div className='ml-auto mr-2'> <Search /></div>
            </div>
            <ManagerOverview/>
            <Table />
        </div>
    )
}

export default HeadManager