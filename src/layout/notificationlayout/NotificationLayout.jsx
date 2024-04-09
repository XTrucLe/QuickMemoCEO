import React from 'react'
import Layout from '../Layout'
import SideBar from '../../component/sidebar/SideBar'
import HeadNotification from '../../component/headerContent/headNotification/HeadNotification'

const NotificationLayout = ({ children }) => {
    return (
        <Layout
            sidebar={<SideBar />}
            children={(
                <>
                    <h1 className='text-2xl font-bold mb-3'> Notification</h1>
                    <HeadNotification />
                    {children}
                </>
            )}
        />
    )
}

export default NotificationLayout