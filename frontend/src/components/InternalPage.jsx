// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const InternalPage = ({ handleInternalPageUpload }) => {
  const handleFileChange = (e) => {
    handleInternalPageUpload(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h3 style={{color:"blueviolet"}}>Internal Pages</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default InternalPage;
