import { useState, useEffect } from 'react';
import Api from 'utils/api';

function FetchBookData(bookId) {
  let foundBook = null;
  // const [foundBook, setFoundBook] = useState();

  const suspender = Api.get(`/books`, {
    params: {
      bookID: bookId
    }
  })
    .then((response) => response.data)
    .then((data) => {
      foundBook = { ...data, quantity: 1 };
    });
  // setFoundBook({ ...response, quantity: 1 });
  console.log(foundBook);

  return {
    read() {
      if (foundBook === null) {
        throw suspender;
      } else {
        return foundBook;
      }
    }
  };
}

function FetchBook(bookId) {
  return {
    book: FetchBookData(bookId)
  };
}

export default FetchBook;
