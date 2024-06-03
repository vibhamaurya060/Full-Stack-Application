// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const BackCover = ({ setBackCover }) => {
  const handleFileChange = (e) => {
    setBackCover(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h3 style={{color:"blueviolet"}}> Back Cover</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default BackCover;
