import React from 'react';

function TableRow({ index, data }) {
  const renderCell = (value) => (
    <td className='px-1 border-2'>
      {value || '-'}
    </td>
  );

  return (
    <tr className='max-h-10 min-h-4' style={{ background: `${index % 2 === 0 ? 'cyan' : ''}` }}>
      {renderCell(data?.STT)}
      {renderCell(data?.ID)}
      {renderCell(data?.Name)}
      {renderCell(data?.Gender)}
      {renderCell(data?.Email)}
      {renderCell(data?.Phone)}
    </tr>
  );
}

export default TableRow;