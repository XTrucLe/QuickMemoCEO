import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { managerAPI } from '../../api';
import { Table } from 'antd';
import { SearchContext } from '../../layout/Layout';
import EmployeeModal from '../../component/modal/EmployeeModal';

const columns = [
  {
    title: 'ID Employee',
    dataIndex: 'idEmployee',
    key: 'idEmployee',
  },
  {
    title: 'Employee Number',
    dataIndex: 'Employee Number',
    key: 'employeeNumber',
  },
  {
    title: 'Last Name',
    dataIndex: 'Last Name',
    key: 'lastName',
  },
  {
    title: 'First Name',
    dataIndex: 'First Name',
    key: 'firstName',
  },
  {
    title: 'SSN',
    dataIndex: 'SSN',
    key: 'ssn',
  },
  {
    title: 'Pay Rate',
    dataIndex: 'Pay Rate',
    key: 'payRate',
  },
  {
    title: 'Pay Rates ID',
    dataIndex: 'Pay Rates_idPay Rates',
    key: 'idPayRates',
  },
  {
    title: 'Vacation Days',
    dataIndex: 'Vacation Days',
    key: 'vacationDays',
  },
];

// main processing function
const Manager = () => {
  const [tableData, setTableData] = useState([]),
    // { searchTerm } = useContext(SearchContext),
    [selectedEmployee, setSelectedEmployee] = useState(null),
    [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      // handle any errors that may occur during the API call.
      try {
        // make a GET request to the API endpoint.
        const response = await axios.get(managerAPI);
        console.log(response.data?.ListEmployee);
        // set as the new state for the tableData 
        setTableData(response.data?.ListEmployee);

      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  // const handleSearch = (tableData, searchTerm, columns) => {
  //   return tableData.filter(item => {
  //     const columnKeys = columns.map(column => column.key);
  //     const itemValues = columnKeys.map(key => item[key] || '');
  //     const searchterm = searchTerm || '';

  //     return itemValues.some(itemValue => itemValue.includes(searchterm));
  //   });
  // };
  // //fill data in the table 
  // const filteredData = searchTerm ? handleSearch(tableData, searchTerm, columns) : tableData;


  // Xử lý khi click vào một hàng
  const handleRowClick = (record) => {
    setSelectedEmployee(record);
    setModalVisible(true);
  };

  // Đóng modal
  const handleModalClose = () => {
    setModalVisible(false);
  };
  return (
    <>
      <Table columns={columns}
        dataSource={tableData}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
      <EmployeeModal
        employee={selectedEmployee}
        visible={modalVisible}
        onClose={handleModalClose}
      />
    </>
  )
}

export default Manager