import React from 'react'
import { NavLink} from 'react-router-dom';

const ListOption = ({ ListOptions, CurentLocation }) => {
    return (
        <div className=' w-full h-auto mt-5'>
            {ListOptions.map((options, index) => {
                
                return (
                    <NavLink
                        onClick={console.log(CurentLocation)}
                        key={index}
                        exact end
                        to={options.contentPath}
                        className='view_pages'
                        activeClassName={options.index===index ? 'activeViewPage' : ''}
                    >
                        {options.contentName}
                    </NavLink>
                );
            })}
        </div>
    )
}

export default ListOption