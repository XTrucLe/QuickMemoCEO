import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import FloatingForm from '../../component/modal/FloatingForm'

const buttonStyle = 'w-auto  h-20 '

const NewEmployee = () => {

  return (
    <div className='grid place-items-center grid-cols-1 w-full h-auto px-6'>
      <FloatingForm />
      <div className='flex w-full  justify-around'>
        <Button ghost type="primary" className={buttonStyle}>
          <Link to="/manage/newEmployee/Personal">Create Personal Information</Link>
        </Button>

        <Button ghost type="primary" className={buttonStyle}>
          <Link to="/manage/newEmployee/Employment">Create Employment Information</Link>
        </Button>

        <Button ghost type="primary" className={buttonStyle}>
          <Link to="/manage/newEmployee/Working">Working Information</Link>
        </Button>

        <Button ghost type="primary" className={buttonStyle}>
          <Link to="/manage/newEmployee/Payroll">Pay Roll Information</Link>
        </Button>
      </div>

    </div>
  )
}

export default NewEmployee