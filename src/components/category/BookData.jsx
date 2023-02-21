import React from 'react';

export default function BookData(props) {
  const { book } = props;
  // const count = 0;

  return (
    <span>
      <img src={book.imgsrc} alt="" />
      <p>{book.name}</p>
      <p>{book.price}</p>
      <p>{book.stock}</p>
    </span>
  );
}
