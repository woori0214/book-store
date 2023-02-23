import React from 'react';
import styled from 'styled-components';

export default function BookData(props) {
  const { book } = props;

  return (
    <BookSpan>
      <BookImg src={book.imgsrc} alt="" />
      <BookName>{book.name}</BookName>
      <BookPrice>{book.price}</BookPrice>
      <BookStock>
        재고
        {book.stock}
      </BookStock>
    </BookSpan>
  );
}
const BookImg = styled.img`
  width: 60%;
  height: 27vh;
`;

const BookName = styled.p`
  font-size: 1.3vw;
  font-weight: bolder;
  margin: 1%;
`;
const BookPrice = styled.p`
  font-size: 1.2vw;
  margin: 0;
`;
const BookStock = styled.p`
  font-size: 1vw;
  margin: 0;
`;

const BookSpan = styled.span`
  padding-top: 5%;
  width: 100%;
  height: 100%;
  padding-right: 5%;
  text-align: center;
`;
