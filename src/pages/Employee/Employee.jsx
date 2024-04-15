import React, { useState } from 'react'
import Table from '../../component/dataTable/Employee/Table'

const head=['STT', 'ID', 'Name', 'Gender','Email', 'phone', ]

const Employee = () => {
  const [tableData, setTableData] = useState([]);
  return (
    <div className=' w-full h-max m-2 bg-slate-300'>
       <Table head={head} tableData={tableData}/>
    </div>
  )
}

export default Employee