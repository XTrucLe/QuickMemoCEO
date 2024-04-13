import React from 'react'
import { useLocation } from 'react-router-dom'
import Layout from '../../Layout'
import SideBar from '../../../component/sidebar/SideBar';
import ListOption from './../../../component/ListOption/ListOption';
import HeadEmployee from '../../../component/headerContent/headEmployee/HeadEmployee';


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