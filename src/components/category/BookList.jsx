import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BookData from './BookData';

export default function BookList(props) {
  const [bookList, setBookList] = useState('');
  const [loading, setLoading] = useState(false);
  const { categoryId, page } = props;

  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://localhost:8080/book/', {
        params: {
          category: categoryID,
          page
        }
      });
      // console.log(res.displayPage);
      setBookList(res.data);
      setLoading(true);
    }
    getData();
  }, [categoryId, page]);

  return (
    <BookDataList>
      {loading ? (
        bookList.map((book, index) => <BookDataStyle book={bookList[index]} key={book.id} />)
      ) : (
        <h1>Book Loading...!</h1>
      )}
    </BookDataList>
  );
}

const BookDataList = styled.div`
  display: flex;
  justify-content: around;
  padding-top: 5%;
`;

const BookDataStyle = styled(BookData)`
  width: 20%;
  padding: 50%;
`;
