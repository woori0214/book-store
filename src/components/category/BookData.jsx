import React from 'react';
import styled from 'styled-components';

export default function BookData(props) {
  const { book } = props;

  return (
    <BookSpan>
      <BookImg src={book.imageUrl} alt="" />
      <BookName>{book.title}</BookName>
      <BookPrice>{book.salePrice}</BookPrice>
      <BookStock>
        재고
        {book.score}
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
