import React from 'react'
import SideBar from '../../component/sidebar/SideBar'
import Layout from '../Layout'

function DefaultLayout({ children }) {
    return (
        <Layout
            sidebar={<SideBar />}
            children={children}
        />
    )
}

export default DefaultLayout