import axios from 'axios';
import { useEffect, useState } from 'react';

const GetData = ({ url, dataField = null }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
        setTableData(response?.data[dataField] || []);
  
      } catch (error) {
        console.error('Error fetching data:', error);
        return '';
      }
    };
  
    fetchData();
  },[url,dataField])

  return tableData;
};
export default GetData;