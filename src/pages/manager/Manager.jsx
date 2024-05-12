import React, { useContext, useEffect, useState } from 'react'
import { Button, Table } from 'antd'
import DeleteConfirm from './../../component/modal/Confirm';
import { handleActionClick } from './../../component/table/action/HandleAction';
import EmployeeModal from '../../component/modal/Admin_Employee';
import { ListAPI, Manage } from '../../api';
import { HandleSearch } from '../../component/search/HandleSearch';
import { SearchContext } from './../../layout/Layout';
import GetData from './../../api/REST/Get';

// main processing function
const Manager = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalType, setModalType] = useState(null);
  const { searchTerm } = useContext(SearchContext)

  //get data from API
  const getData = GetData({ url: Manage.employeeInfo , dataField: 'ListEmployee' })

  useEffect(() => {
    try {
      //filter table data fields based on the search term
      setTableData(HandleSearch({ searchText: searchTerm, data: getData }));

    } catch (error) {
      console.log(error);
    }
  }, [searchTerm, getData,tableData]);

  //defind colum on the manage table
  const columns = [
    {
      title: 'PERSONAL_ID',
      dataIndex: 'PERSONAL_ID',
      key: 'PERSONAL_ID',
      width: '115px'
    },
    {
      title: 'No.Employee',
      dataIndex: 'Employee Number',
      key: 'employeeNumber',
      width: '115px',
      sorter: (a, b) => a['Employee Number'] - b['Employee Number'], // Sort by Employee Number
      sortDirections: ['ascend', 'descend'],
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
          <Button ghost type="primary" onClick={() => handleTableClick(record, 'edit')}>Edit</Button>
          <Button danger ghost type="primary" onClick={() => handleTableClick(record, 'delete')}>Delete</Button>
        </span>
      ),
    },
  ];

  //Process ation change events when click on rows
  const handleTableClick = (record, action) =>
    handleActionClick(record, action, setSelectedEmployee, setModalType);

  // Đóng modal
  const handleModalClose = () => {
    setModalType(null);
  };

  return (
    <>
      {/* Table set up */}
      <Table columns={columns}
        dataSource={tableData}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 400 }}
        size='middle'
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
      {/* Modals in table */}
      {modalType === 'delete' && (
        <DeleteConfirm
          id={selectedEmployee.idEmployee}
          deleteAPI={ListAPI.DeleteAPI}
          visible={true}
          onClose={handleModalClose}
        />
      )}
      {modalType === 'employee' && (
        <EmployeeModal
          employee={selectedEmployee}
          visible={true}
          onClose={handleModalClose}
        />
      )}
      {modalType === 'edit' && (
        <EmployeeModal
          isEdit={true}
          employee={selectedEmployee}
          visible={true}
          onClose={handleModalClose}
        />
      )}
    </>
  )
}

export default Manager