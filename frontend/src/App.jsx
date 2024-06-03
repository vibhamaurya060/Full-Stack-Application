// eslint-disable-next-line no-unused-vars
import React from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  return (
    <div style={{marginLeft:"100px"}}>
      <h2 style={{color:"GrayText",marginLeft:"200px", fontSize:"30px"}}>BOOK PDF </h2>
      <BookForm />
      <br/>
      <hr />
      <BookList />
    </div>
  );
}

export default App;
