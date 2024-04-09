import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NotificationCard = ({ title, name, createDate, reminder }) => {
  return (
    <div className=' relative w-full h-40 bg-slate-100 rounded-md my-2'>
      <div className=' w-full h-full p-4'>
        <strong className=' text-xl'>{title}</strong>
        <div className=" pl-3">
          <h2 className=""><strong>Name: </strong>{name}</h2>
          <p className=""><strong>Create date: </strong> {createDate}</p>
          <p className=""><strong>Reminder: </strong>{reminder}</p>
        </div>
      </div>
      <FontAwesomeIcon icon={faXmark} className=' text-xl absolute top-3 right-3' />
    </div>
  )
}

export default NotificationCard