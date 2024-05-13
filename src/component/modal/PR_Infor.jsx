import React from 'react'
import { Form, Modal } from 'antd'
import PrEmployee from '../employeeinfor/information/PR_Employee'
import PayRates from '../employeeinfor/information/PR_PayRate'

const PrInfor = ({ employee, visible, onClose }) => {
  return (
    <Modal
      title=<div className='text-xl font-extrabold'>Employee Information</div>
      visible={visible}
      onCancel={onClose}
      footer={[]}
      width={800}
    >
      {employee &&
        <Form disabled layout='vertical'>
          <PrEmployee employee={employee} disableItem={false} />
          <PayRates employee={employee} />
        </Form>
      }
    </Modal>
  )
}

export default PrInfor