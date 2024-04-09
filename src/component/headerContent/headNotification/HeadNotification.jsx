import React from 'react'
import { Link } from 'react-router-dom'

//list properties of head notification selection
const ListOptions = [
  { path: '/notification/anniversary_reminders', name: 'Anniversary Reminders', bg_color: '#2F84A1' },
  { path: '/notification/vacation_exceeded', name: 'Exceeded Vacation Days', bg_color: '#FFA87D' },
  { path: '/notification/benefits_plan_changes', name: 'Benefits Plan Changes', bg_color: '#E3485B' },
  { path: '/notification/birthday_notifications', name: 'Birthday Notifications', bg_color: '#16D39A' },

]

const HeadNotification = () => {
  return (
    <div className='flex w-full h-auto rounded'>
    {/* render list option */}
      {ListOptions.map((option, index) => {
        return (
          <div className='grid place-items-center w-1/4 h-auto p-3 ' style={{ background: option.bg_color }}>
            <Link to={option?.path} key={index} >
              {option.name}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default HeadNotification