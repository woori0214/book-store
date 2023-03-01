import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function BookData(props) {
  const { book } = props;
  const [bookState, setBookState] = useState('');
  const [stateColor, setStateColor] = useState('white');

  useEffect(() => {
    if (parseInt(book.score) >= 90) {
      setBookState('BEST');
      setStateColor('#6E54E2');
    } else if (parseInt(book.score) <= 10) {
      setBookState('SAIL');
      setStateColor('#df645d');
    }
  }, []);

  return (
    <BookSpan>
      <BookImg src={book.imageUrl} alt="" />
      <BookState color={stateColor}>{bookState}</BookState>
      <BookName>{book.title}</BookName>
      <BookPriceDiv>
        {bookState == 'SAIL' ? <BookOriginPrice>{book.price}</BookOriginPrice> : ''}
        <BookPrice>{book.salePrice}</BookPrice>
      </BookPriceDiv>
      <BookStock>
        재고
        {book.quantity}
      </BookStock>
    </BookSpan>
  );
}

const BookImg = styled.img`
  width: 60%;
  height: 27vh;
`;
const BookState = styled.p`
  font-size: 1.1vw;
  margin: 3.5%;
  font-weight: bold;
  color: ${(props) => props.color || 'white'};
`;

const BookName = styled.p`
  font-size: 1.3vw;
  margin: 1%;
`;
const BookPrice = styled.p`
  font-size: 1.2vw;
  margin: 0;
`;
const BookOriginPrice = styled.p`
  font-size: 1.2vw;
  margin: 0;
  color: #d9d9d9;
  text-decoration: line-through;
`;
const BookStock = styled.p`
  font-size: 1vw;
  margin: 0;
`;

const BookSpan = styled.span`
  padding-top: 5%;
  width: 450px;
  height: 100%;
  padding-right: 5%;
  text-align: center;
`;

const BookPriceDiv = styled.div`
  display: flex;
  text-item: center;
  justify-content: center;
  gap: 10px;
`;
