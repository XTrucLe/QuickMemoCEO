import React from 'react';

function TableRow({ data }) {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <tr>
      <td>{data.stt}</td>
      <td>{data.id}</td>
      <td>
        <div className='truncate' title={data.name}>
          {truncateText(data.name, 10)}
        </div>
      </td>
      <td>
        <div className='truncate' title={data.gender}>
          {truncateText(data.gender, 5)}
        </div>
      </td>
      <td>
        <div className='truncate' title={data.email}>
          {truncateText(data.email, 20)}
        </div>
      </td>
      <td>
        <div className='truncate' title={data.phone}>
          {truncateText(data.phone, 10)}
        </div>
      </td>
    </tr>
  );
}

export default TableRow;