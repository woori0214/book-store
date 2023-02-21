import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../commons/button/Button';
import BookInfoContext from './BookInfoContext';

function BookInfo() {
  const navigate = useNavigate();

  const handleAddCart = () => {
    navigate('/shoppingCart');
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
        />
        <Button
          buttonTitle="바로 결제하기"
          margin="561px 0 0 40px"
          onClick={handleOrder}
        />
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
