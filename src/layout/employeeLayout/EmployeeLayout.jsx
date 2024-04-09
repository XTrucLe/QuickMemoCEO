import React from 'react'
import HeadEmployee from '../../component/headEmployee/HeadEmployee'
import ListOption from '../../component/ListOption/ListOption'
import { useLocation } from 'react-router-dom'
import SideBar from '../../component/sidebar/SideBar'
import Layout from '../Layout'

const ListOptions = [
    { contentName: 'Employee Detail', contentPath: '/employee/' },
    { contentName: 'Day off Detail', contentPath: '/employee/dayoffdetail' },
]

const EmployeeLayout = ({ children }) => {
    // get curent location for list options
    const CurentLocation = useLocation()
    // create new child element for layout
    const newChild = (
        <>
            <HeadEmployee />
            {/* List option at head Employee page */}
            <ListOption ListOptions={ListOptions} CurentLocation={CurentLocation?.pathname} />
            {/* Content in page */}
            <div className='w-full h-full p-3'>{children}</div>
        </>
    );
    return (
        <Layout
            sidebar={<SideBar />}
            children={newChild}
        />
    )
}

export default EmployeeLayout