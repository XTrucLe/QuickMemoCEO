import { Button, Table } from 'antd';
import { React, useContext, useEffect, useState } from 'react'
import GetData from './../../api/REST/Get';
import { EmployeeAPI } from '../../api';
import { HandleSearch } from './../../component/search/HandleSearch';
import { SearchContext } from './../../layout/Layout';
import { handleActionClick } from '../../component/table/action/HandleAction';
import HrEmployee from '../../component/modal/HR_Employee';
import DeleteConfirm from './../../component/modal/Confirm';

const Employee = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState([]);
  const [modalType, setModalType] = useState(null);
  const { searchTerm } = useContext(SearchContext)

  const newData = GetData({ url: EmployeeAPI.getEmployee, dataField: 'ListEmployment' })

  useEffect(() => {
    try {
      setTableData(HandleSearch({ data: newData, searchText: searchTerm }));
    } catch (error) {

    }
  }, [searchTerm, newData]);

  const columns = [
    {
      title: 'Employment ID',
      dataIndex: 'EMPLOYMENT_ID',
      key: 'EMPLOYMENT_ID',
      width: '115px'
    },
    {
      title: 'Full Name',
      dataIndex: 'Full Name',
      key: 'fullName',
      render: (text, record) => `${record['CURRENT_FIRST_NAME']} ${record['CURRENT_LAST_NAME']}`,
      sorter: (a, b) => a['CURRENT_FIRST_NAME'].localeCompare(b['CURRENT_FIRST_NAME']), // Sort by Full Name
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Gender',
      dataIndex: 'CURRENT_GENDER',
      key: 'CURRENT_GENDER',
      filters: [//filter values
        { text: 'Male', value: 'Female' },
        { text: 'Female', value: 'Female' },
      ],
      onFilter: (value, record) => record.CURRENT_GENDER === value,
    },
    {
      title: 'Personal Email',
      dataIndex: 'CURRENT_PERSONAL_EMAIL',
      key: 'CURRENT_PERSONAL_EMAIL',
    },
    {
      title: 'Phone Number',
      dataIndex: 'CURRENT_PHONE_NUMBER',
      key: 'CURRENT_PHONE_NUMBER',
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
      <Table
        dataSource={tableData}
        columns={columns}
        onRow={(record) => ({
          // Add new onclick event for row selection
          onClick: (event) => {
            // Check if the clicked cell is not the last column
            if (event.target.closest('td').cellIndex !== event.target.closest('tr').cells.length - 1) {
              handleTableClick(record, 'row');
            }
          },
        })}
      />
      {modalType === 'employee' && (
        <HrEmployee
          employee={selectedEmployee}
          visible={true}
          onClose={handleModalClose}
        />
      )}
      {modalType === 'delete' && (
        <DeleteConfirm
          deleteAPI={''}
          id={selectedEmployee.EMPLOYMENT_ID}
          visible={true}
          onClose={handleModalClose}
        />
      )}
      {modalType === 'edit' && (
        <HrEmployee
          
          employee={selectedEmployee}
          visible={true}
          onClose={handleModalClose}
        />
      )}
    </>
  )
}

export default Employee