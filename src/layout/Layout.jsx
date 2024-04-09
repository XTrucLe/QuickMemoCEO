import { React, useState } from 'react';
import Header from '../component/header/Header';

const Layout = ({ sidebar, header, footer, children }) => {
    const [isSidebarShow, setIsSidebarShow] = useState(true);

    const sidebarStyle = {
        display: `${isSidebarShow ?'flex':'none'}`,
    }

    return (
        <>
            <div className='flex w-full' >
                <div className=' w-auto h-auto' style={sidebarStyle}>
                    {sidebar}
                </div>
                <div className='inline w-full h-full'>
                    {/* <div className='w-auto h-auto'>{header}</div> */}
                    <Header isSidebarShow={isSidebarShow} setIsSidebarShow={setIsSidebarShow} />
                    <div className='w-full h-full p-3'>{children}</div>
                </div>
            </div>
            {footer}
        </>
    );
};

export default Layout;