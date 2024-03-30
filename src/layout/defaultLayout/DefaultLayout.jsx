import React from 'react'
import Header from '../../component/header/Header'
import MenuBar from '../../component/menubar/MenuBar'
import Footer from '../../component/footer/Footer'

function DefaultLayout({ children }) {
    return (
        <>
            <div className='flex w-full'>
                <MenuBar />
                <div className='grid grid-cols-1 w-full h-20'>
                    <Header />
                    <div className='content'>{children}</div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DefaultLayout