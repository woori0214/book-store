import React from 'react';

export default function BookData(props) {
  const { book } = props;

  return (
    <div>
      <p>bookImg</p>
      <p>{book.name}</p>
      <p>{book.price}</p>
      <p>{book.stock}</p>
    </div>
  );
}
