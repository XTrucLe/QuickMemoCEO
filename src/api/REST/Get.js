import axios from 'axios';
import { useEffect, useState } from 'react';

const GetData = ({ url, dataField = null }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const result = response?.data[dataField]|| response.data || []
        setTableData(result);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url, dataField])

  return tableData;
};
export default GetData;