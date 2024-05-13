import { React, useContext, useEffect, useState } from 'react'
import { Button, Table } from 'antd';
import GetData from '../../api/REST/Get';
import { handleActionClick } from '../../component/table/action/HandleAction';
import { HandleSearch } from '../../component/search/HandleSearch';
import { SearchContext } from '../../layout/Layout';
import { payroll } from './../../api/index';
import PrInfor from '../../component/modal/PR_Infor';

export const Payroll = () => {
  const [tableData, setTableData] = useState([])
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalType, setModalType] = useState(null);
  const { searchTerm } = useContext(SearchContext)


  const newData = GetData({ url: payroll.allEmployee, dataField: 'ListPayRoll' })
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
      dataIndex: 'EmployeeNumber',
      key: 'EmployeeNumber',
      sorter: (a, b) => a['EmployeeNumber'] - b['EmployeeNumber'], // Sort by EmployeeNumber
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Full Name',
      dataIndex: 'Full Name',
      key: 'fullName',
      render: (text, record) => `${record.LastName} ${record.FirstName}`,
      sorter: (a, b) => a.LastName.localeCompare(b.LastName), // Sort by Full Name
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'SSN',
      dataIndex: 'SSN',
      key: 'SSN',
    },
    {
      title: 'Value',
      dataIndex: 'Value',
      key: 'Value',
      sorter: (a, b) => a['Value'] - b['Value'], // Sort by Value
      sortDirections: ['ascend', 'descend'],
    },

  ]

  //Process ation change events when click on rows
  const handleTableClick = (record, action) => {
    handleActionClick(record, action, setSelectedEmployee, setModalType)
  }

  // Đóng modal
  const handleModalClose = () => {
    setModalType(null);
  };

  return (
    <>
      <Table
        columns={columns}
        pagination={{ pageSize: 50 }}
        dataSource={tableData}
        onRow={(record) => ({ onClick: () => handleTableClick(record, 'row') })}
      />
      {modalType === 'employee' && (
        <PrInfor
          employee={selectedEmployee}
          visible={true}
          onClose={handleModalClose}
        />
      )}
    </>
  )
}
