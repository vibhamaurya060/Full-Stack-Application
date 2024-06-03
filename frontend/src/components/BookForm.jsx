// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import FrontCover from './FrontCover';
import BackCover from './BackCover';
import InternalPage from './InternalPage';

const BookForm = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [frontCover, setFrontCover] = useState('');
  const [backCover, setBackCover] = useState('');
  const [internalPages, setInternalPages] = useState([]);

  const handleInternalPageUpload = (page) => {
    setInternalPages([...internalPages, page]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/books', {
        title,
        author,
        frontCover,
        backCover,
        internalPages,
      });
      console.log('Book created:', response.data);
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{width:"500px", border:"1px solid ", padding:"40px", borderRadius:"10px"}}>
      <div style={{marginBottom:"15px"}}>
        <label>Author:</label>
        <input style={{padding:"8px",marginLeft:"10px",width:"400px"}} type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <div style={{marginBottom:"10px"}}>
        <label>Title:</label>
        <input style={{padding:"8px",marginLeft:"28px",width:"400px"}}  type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <FrontCover setFrontCover={setFrontCover} />
      <BackCover setBackCover={setBackCover} />
      <InternalPage handleInternalPageUpload={handleInternalPageUpload} />
      <button style={{marginTop:"25px",backgroundColor:"green",color:"white"}} type="submit">Create Book</button>
    </form>
  );
};

export default BookForm;
