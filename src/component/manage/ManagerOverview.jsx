import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faUserCheck, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'

const overView = [
    { icon: faUserGroup, name: 'Total Employees', value: 192 },
    { icon: faUserCheck, name: 'Active Employees', value: 181 },
    { icon: faFaceSmile, name: 'On Leave', value: 17 },
    { icon: faBriefcase, name: 'Onboarding', value: 27 },
]
const ManagerOverview = () => {

    return (
        <div className="p-4">
            <div className="flex flex-wrap gap-4 mt-0 h-auto ">
                {overView.map((employee) => (
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