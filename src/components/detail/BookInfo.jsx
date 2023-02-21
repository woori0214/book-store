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

const BookInfoWrapper = styled.div`
  display: flex;
  position: relative;
`;

const FoundBookImg = styled.img`
  width: 326px;
  height: 462px;
  margin-top: 85px;
`;

const DescriptionTable = styled.table`
  box-sizing: border-box;
  width: 761px;
  height: 414px;
  border-top: 4px solid #353535;
  margin: 100px 0 0 94px;
  border-collapse: collapse;
`;

const DescriptionTr = styled.tr`
  height: 99px;
  &:first-child {
    height: 117px;
  }
`;

const DescriptionTd = styled.td`
  vertical-align: middle;
  &:first-child {
    width: 178px;
    text-align: center;
    font-family: ${props =>
      props.bold ? 'NotoSansKR-Bold' : 'NotoSansKR-Regular'};
    font-size: 30px;
    line-height: ${props => (props.bold ? '41px' : '43px')};
  }
  margin-left: 28px;
  border-bottom: 1px solid #b5b5b5;
  font-size: 20px;
  line-height: 29px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
`;

export default BookInfo;
