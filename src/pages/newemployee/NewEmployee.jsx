import React from 'react'
import InformationForm from '../../component/employeeinfor/InformationForm'
import { Button } from 'antd'
import FloatingForm from '../../component/modal/FloatingForm'



const NewEmployee = () => {
  return (
    <div className='grid place-items-center grid-cols-1 w-full h-auto px-6'>
      <FloatingForm />
      <InformationForm />
    </div>
  )
}

export default NewEmployee