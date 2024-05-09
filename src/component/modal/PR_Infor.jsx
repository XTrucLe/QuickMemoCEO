import React from 'react'
import { Form, Modal } from 'antd'
import PrEmployee from '../employeeinfor/information/PR_Employee'
import PayRates from '../employeeinfor/information/PR_PayRate'

const PR_Infor = ({ employee, visible, onClose }) => {
  return (
    <Modal
      title=<div className='text-xl font-extrabold'>Employee Information</div>
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={800}
    >
      {employee &&
        <Form disabled>
          <PrEmployee employee={employee} />
          <PayRates employee={employee} />
        </Form>
      }
    </Modal>
  )
}

export default PR_Infor