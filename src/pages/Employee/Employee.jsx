import { Button, Table } from 'antd';
import { React, useContext, useEffect, useState } from 'react'
import GetData from './../../api/REST/Get';
import { EmployeeAPI } from '../../api';
import { HandleSearch } from './../../component/search/HandleSearch';
import { SearchContext } from './../../layout/Layout';
import { handleActionClick } from '../../component/table/action/HandleAction';

const Employee = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [modalType, setModalType] = useState(null);
  const { searchTerm } = useContext(SearchContext)

  const newData = GetData({ url: EmployeeAPI.getEmployee, dataField: '' })

  useEffect(() => {
    try {
      setTableData(HandleSearch({ data: newData, searchText: searchTerm }));
    } catch (error) {

    }
  }, [searchTerm, newData]);

  const columns = [
    {
      title: 'ID Employee',
      dataIndex: 'idEmployee',
      key: 'idEmployee',
    },
    {
      title: 'No.Employee',
      dataIndex: 'Employee Number',
      key: 'employeeNumber',
      sorter: (a, b) => a['Employee Number'] - b['Employee Number'], // Sort by Employee Number
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Full Name',
      dataIndex: 'Full Name',
      key: 'fullName',
      render: (text, record) => `${record['First Name']} ${record['Last Name']}`,
      sorter: (a, b) => a['First Name'].localeCompare(b['First Name']), // Sort by Full Name
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <span>
          <Button type="default" onClick={() => handleTableClick(record, 'edit')}>Edit</Button>
          <Button danger type="default" onClick={() => handleTableClick(record, 'delete')}>Delete</Button>
        </span>
      ),
    },
  ]

  //Process ation change events when click on rows
  const handleTableClick = (record, action) =>
    handleActionClick(record, action, setSelectedEmployee, setModalType)

  const handleModalClose = () => setModalType(null)
  return (
    <>
      <Table dataSource={tableData} columns={columns} />
      
    </>
  )
}

export default Employee