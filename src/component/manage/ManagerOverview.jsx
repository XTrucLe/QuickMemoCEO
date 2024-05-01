import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faUserCheck, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import { employeeAPI } from '../../api'

const overView = [
    { icon: faUserGroup, name: 'Total Employees', value: '', endPoint: employeeAPI },
    { icon: faUserCheck, name: 'Active Employees', value: 181, endPoint:'' },
    { icon: faFaceSmile, name: 'On Leave', value: 17, endPoint: '' },
    { icon: faBriefcase, name: 'Onboarding', value: 27, endPoint: '' },
]

const ManagerOverview = () => {
    const [overViewData, setOverviewData] = useState([])
    
    const fetchData = async (item) => {
        const response = await axios.get(item.endPoint);
        return {...item, value: response?.data.ListEmployee.length };
      };
    
      useEffect(() => {
        const fetchDataForItems = overView
         .filter((item) => item.endPoint) // Only fetch data for items with a valid endpoint
         .map((item) => fetchData(item));
    
        Promise.all(fetchDataForItems)
         .then((updatedOverView) => {
            setOverviewData(updatedOverView);
          })
         .catch((error) => {
            console.error(error);
          });
      }, []);

      

    return (
        <div className="p-4">
            <div className="flex flex-wrap gap-4 mt-0 h-auto ">
                {overViewData.map((employee) => (
                    <div key={employee.name} className='flex border border-black min-w-56 h-auto rounded-xl bg-slate-50 select-none'>
                        <div className='w-1/4 h-full font-medium text-4xl grid place-items-center text-red-500  '>
                            <FontAwesomeIcon icon={employee.icon} />
                        </div>
                        <div className=" flex flex-1 flex-col my-3">
                            <h2 className=' font-thin text-lg'>{employee.name}</h2>
                            <h2 className='text-xl font-bold'>{employee.value}</h2>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManagerOverview