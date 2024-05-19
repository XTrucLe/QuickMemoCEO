import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import FloatingForm from '../../component/modal/FloatingForm'

const buttonStyle = 'w-auto  h-20 '

const NewEmployee = () => {

  return (
    <div className='grid place-items-center grid-cols-1 w-full h-auto px-6'>
      <FloatingForm />
      <div className='flex w-full justify-around'>
        <Link to="/manage/newEmployee/Personal">
          <Button ghost type="primary" className={buttonStyle}>
            Create Personal Information
          </Button>
        </Link>

        <Link to="/manage/newEmployee/Employment">
          <Button ghost type="primary" className={buttonStyle}>
            Create Employment Information
          </Button>
        </Link>

        <Link to="/manage/newEmployee/Working">
          <Button ghost type="primary" className={buttonStyle}>
            Create Working Information
          </Button>
        </Link>

        <Link to="/manage/newEmployee/Payroll">
          <Button ghost type="primary" className={buttonStyle}>
            Create Pay Roll Information
          </Button>
        </Link>

        <Link to="/manage/newEmployee/Benefit">
          <Button ghost type="primary" className={buttonStyle}>
            Create New Benefit
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NewEmployee