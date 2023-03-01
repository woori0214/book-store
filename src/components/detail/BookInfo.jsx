import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/commons/button/Button';
import BookInfoContext from './BookInfoContext';

function BookInfo() {
  const navigate = useNavigate();
  console.log(foundBook);

  const handleAddCart = () => {
    let booksList = JSON.parse(localStorage.getItem('books'));
    if (booksList) {
      if (
        booksList.some((book) => {
          if (book.id === foundBook[0].id) return true;
        })
      ) {
        alert('동일한 제품이 장바구니에 있습니다.');
        return;
      }
      booksList.push(foundBook[0]);
    } else {
      booksList = [foundBook[0]];
    }
    localStorage.setItem('books', JSON.stringify(booksList));
    alert('장바구니에 추가 되었습니다.');
  };

  const handleOrder = () => {
    navigate('/order');
  };

  return (
    <Wrapper>
      <Suspense fallback={'Loading...'}>
        <BookInfoContext />
      </Suspense>

      <ButtonWrapper>
        <Button
          buttonTitle="장바구니 추가"
          borderColor="#9E8CEC"
          margin="561px 0 0 816px"
          onClick={handleAddCart}
          fontSize="18px"
        />
        <Button buttonTitle="바로 결제하기" margin="561px 0 0 40px" onClick={handleOrder} fontSize="18px" />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 1181px;
  margin-top: 0;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
`;

export default BookInfo;
