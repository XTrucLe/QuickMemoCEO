import React from 'react';

const TruncateText = ({ text, length }) => {
  if (text.length > length) {
    return (
      <>
        {text.substring(0, length)}...
      </>
    );
  }
  return text;
};

export default TruncateText;