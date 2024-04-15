import React, { useEffect, useState } from 'react'
import Table from './../../component/dataTable/Employee/Table';
import axios from 'axios';
import { managerAPI } from '../../api';

const head = ['STT', 'ID', 'Name', 'Gender', 'Email', 'phone',]

const Manager = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // handle any errors that may occur during the API call.
      try {
        // make a GET request to the API endpoint.
        const response = await axios?.get(managerAPI);
        // set as the new state for the tableData 
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Table head={head} tableData={tableData} />
    </div>
  )
}

export default Manager