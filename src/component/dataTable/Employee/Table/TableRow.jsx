import React from 'react';

function TableRow({ data }) {
  const renderCell = (value) => (
    <td>
      <div className=' max-h-10 min-h-4' title={value}>
        {value || '-'}
      </div>
    </td>
  );

  return (
    <tr>
      {renderCell(data?.stt)}
      {renderCell(data?.id)}
      {renderCell(data?.name)}
      {renderCell(data?.gender)}
      {renderCell(data?.email)}
      {renderCell(data?.phone)}
    </tr>
  );
}

export default TableRow;