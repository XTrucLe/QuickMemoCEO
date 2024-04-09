import {React, useEffect, useState } from 'react';
import TableRow from './Table/TableRow';
import '../Employee/Table.css'


function Table() {
    const [tableData, setTableData] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('https://your-api-endpoint.com/data');
    //         const data = await response.json();
    //         setTableData(data);
    //     }

    //     fetchData();
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