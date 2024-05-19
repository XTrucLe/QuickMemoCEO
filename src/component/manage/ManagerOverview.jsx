import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faUserCheck, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'

const overView = [
    { icon: faUserGroup, name: 'Total Employees', value: '', object:'TotalEmployees'},
    { icon: faUserCheck, name: 'Active Employees', value: 181, object:'ActiveEmployees' },
    { icon: faFaceSmile, name: 'On Leave', value: 17, object:'NotActiveEmployees'},
    // { icon: faBriefcase, name: 'Onboarding', value: 27, endPoint: '' },
]

const ManagerOverview = () => {
    const [overViewData, setOverviewData] = useState([])
    
    const fetchData = async () => {
        const response = await axios.get('http://localhost:8081/ManagerOverview');       
        return response.data.overview
      };
    
      useEffect(() => {
        const fetchAndUpdateData = async () => {
          const newData = await fetchData();
          const updatedOverView = overView.map((item, index) => {
            return {
              ...item,
              value: newData[0][item.object] // Assuming `newData` has the same order as `overView`
            };
          });
          setOverviewData(updatedOverView);
        };
    
        fetchAndUpdateData();
      }, []);

      

    return (
        <div className="flex justify-items-center items-center p-4">
            <div className="flex flex-wrap gap-14 mt-6 h-auto ">
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