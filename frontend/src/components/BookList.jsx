// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('http://full-stack-application-3.onrender.com/');
      setBooks(response.data);
    };
    fetchBooks();
  }, []);

  const handleDownload = async (id) => {
    window.open(`http://full-stack-application-3.onrender.com/api/books/download/${id}`, '_blank');
  };

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author} <button onClick={() => handleDownload(book._id)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
