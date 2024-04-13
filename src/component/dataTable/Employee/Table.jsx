import {React, useEffect, useState } from 'react';
import TableRow from './Table/TableRow';
import '../Employee/Table.css'


function Table() {
    const [tableData, setTableData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //           const response = await fetch('fakedata.json');
    //           const jsonData = await response.json();
    //           setTableData(jsonData);
    //         } catch (error) {
    //           console.error('Error fetching data:', error);
    //         }
    //       };
    //       fetchData();
    // }, []);

    return (
        <table className='w-full h-auto mt-5'>
            <thead>
                <tr className='dataHeader'>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, index) => (
                    <TableRow key={index} data={data} />
                ))}
            </tbody>
        </table>
    );
}
export default Table