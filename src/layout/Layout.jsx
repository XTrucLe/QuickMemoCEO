import { React, createContext, useState } from 'react';
import Header from '../component/header/Header';


// Tạo một Context object
export const SearchContext = createContext();

const Layout = ({ sidebar,  footer, children }) => {
    // set status for sidebar
    const [isSidebarShow, setIsSidebarShow] = useState(true);

    //set data for search term
    
  const [searchTerm, setSearchTerm] = useState([])

    // set style for sidebar and content elements
    const sidebarStyle = {
        display: `${isSidebarShow ?'flex':'none'}`,
    }

    const contentStyle = {
        paddingLeft: `${isSidebarShow ?  '208px' : '0'}`,
    }
    return (
        <SearchContext.Provider value={{searchTerm, setSearchTerm}}>
            <div className=' relative flex w-full' >
                <div className='fixed w-auto h-auto top-0 left-0' style={sidebarStyle}>
                    {sidebar}
                </div>
                <div className='inline absolute w-full h-full' style={contentStyle}>

                    <Header isSidebarShow={isSidebarShow} setIsSidebarShow={setIsSidebarShow} />
                    <div className='w-full h-full p-3 mt-11 bg-slate-50'>{children}</div>
                </div>
            </div>
            {footer}
        </SearchContext.Provider>
    );
};

export default Layout;