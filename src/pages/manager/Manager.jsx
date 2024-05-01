import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Table } from 'antd'
import EmployeeModal from '../../component/modal/EmployeeModal';
import { employeeAPI } from '../../api';
import DeleteConfirm from './../../component/modal/Confirm';

// main processing function
const Manager = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalType, setModalType] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      // handle any errors that may occur during the API call.
      try {
        // make a GET request to the API endpoint.
        const response = await axios.get(employeeAPI);
        console.log(response.data?.ListEmployee);
        // set as the new state for the tableData 
        setTableData(response.data?.ListEmployee);

      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  //defind colum on the manage table
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
          <Button type="default" onClick={() => handleActionClick(record, 'edit')}>Edit</Button>
          <Button danger type="default" onClick={() => handleActionClick(record, 'delete')}>Delete</Button>
        </span>
      ),
    },
  ];

  //Process ation change events when click on rows
  const handleActionClick = (record, action) => {
    setSelectedEmployee(record);
    const actionLowerCase = action.toLowerCase();

    switch (actionLowerCase) {
      case 'edit':
        setModalType('edit');
        console.log('Edit button clicked:', record);
        break;
      case 'delete':
        if (!modalType) {
          setModalType('delete');
        }
        console.log('Delete button clicked:', record);
        break;
      case 'row':
        setSelectedEmployee(record);
        setModalType('employee');
        console.log('Row clicked:', record);

        break;
      default:
        // Do nothing
        break;
    }
  };

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
        onRow={(record) => ({
          // add new onclick event for row selection
          onClick: (event) => {
            const targetCell = event.target.closest('td'); // Lấy ô được click
            //Deterministic positioning of last column
            const isLastColumn = targetCell.cellIndex === targetCell.parentElement.cells.length - 1;

            if (!isLastColumn)
              handleActionClick(record, 'row')

          },
        })}
      />
      {/* Modals in table */}
      {modalType === 'delete' && (
        <DeleteConfirm
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
          employee={selectedEmployee}
          visible={true}
          onClose={handleModalClose}
        />
      )}

    </>
  )
}

export default Manager