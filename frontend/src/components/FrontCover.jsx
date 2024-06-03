// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const FrontCover = ({ setFrontCover }) => {
  const handleFileChange = (e) => {
    setFrontCover(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h3 style={{marginTop:"40px" ,color:"blueviolet"}}>Front Cover</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default FrontCover;
