import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/commons/button/Button';
import Api from 'utils/api';
import { useParams } from 'react-router-dom';

import BookInfoContext from './BookInfoContext';

function BookInfo() {
  const navigate = useNavigate();
  const [foundBook, setFoundBook] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await Api.get(`http://elice.iptime.org:8080/books`, {
        params: {
          bookID: id
        }
      }).then((response) => response.data);
      setFoundBook({ ...response, quantity: 1 });
    };
    fetchBooks();
  }, []);

  const handleAddCart = () => {
    let booksList = JSON.parse(localStorage.getItem('books'));
    if (booksList) {
      const includeBook = booksList.filter((book) => book._id === id);
      if (includeBook.length !== 0) {
        alert('동일한 제품이 장바구니에 있습니다.');
        return;
      }
      booksList.push(foundBook);
    } else {
      booksList = [foundBook];
    }
    localStorage.setItem('books', JSON.stringify(booksList));
    alert('장바구니에 추가 되었습니다.');
  };

  const handleOrder = () => {
    navigate('/order');
  };

  return (
    <>
      <Wrapper>
        <BookInfoContainer>
          <Suspense fallback={'Loading...'}>
            <BookInfoContext />
          </Suspense>
        </BookInfoContainer>

        <ButtonWrapper>
          <Button buttonTitle="장바구니 추가" borderColor="#9E8CEC" onClick={handleAddCart} fontSize="18px" />
          <Button buttonTitle="바로 결제하기" onClick={handleOrder} fontSize="18px" />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1315px;
  margin: 0 auto;
`;

const BookInfoContainer = styled.div`
  position: relative;
  display: flex;
`;

const ButtonWrapper = styled.div`
  width: 95%;
  margin-top: 2rem;
  gap: 1rem;
  display: flex;
  justify-content: end;
  position: relative;
`;

export default BookInfo;
