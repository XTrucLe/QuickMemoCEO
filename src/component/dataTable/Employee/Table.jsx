import { React } from 'react';
import TableRow from './Table/TableRow';
import '../Employee/Table.css'



function Table({ head,tableData }) {
    

    return (
        <table className='w-full h-auto mt-5'>
            <thead>
                <tr className='dataHeader'>
                    {head?.map((header, index) => <th key={index}>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, index) => (
                    <TableRow key={index} data={data} index={index} />
                ))}
            </tbody>
        </table>
    );
}
export default Table