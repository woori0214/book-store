import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookData from './BookData';

export default function BookList(props) {
  const [bookList, setBookList] = useState('');
  const [loading, setLoading] = useState(false);
  const { categoryId } = props;

  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://localhost:8080/book/', {
        params: {
          category: categoryId
        }
      });
      setBookList(res.data);
      setLoading(true);
    }
    getData();
  }, [categoryId]);

  return <div>{loading ? bookList.map((book, index) => <BookData book={bookList[index]} />) : <h1>Book Loading!</h1>}</div>;
}
