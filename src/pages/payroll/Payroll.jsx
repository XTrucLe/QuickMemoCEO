import { React, useContext, useEffect, useState } from 'react'
import { Button, Table } from 'antd';
import GetData from '../../api/REST/Get';
import { ListAPI } from '../../api';
import { handleActionClick } from '../../component/table/action/HandleAction';
import EmployeeModal from '../../component/modal/Admin_Employee';
import { HandleSearch } from '../../component/search/HandleSearch';
import { SearchContext } from '../../layout/Layout';

export const Payroll = () => {
  const [tableData, setTableData]= useState([])
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalType, setModalType] = useState(null);
  const { searchTerm } = useContext(SearchContext)


  const newData= GetData({ url: ListAPI.PR_employeeAPI ,dataField:'ListEmployee'})
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
      <Table
        columns={columns}
        dataSource={tableData}
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
        <EmployeeModal
          employee={selectedEmployee}
          visible={true}
          onClose={handleModalClose}
        />
      )}
    </>
  )
}
