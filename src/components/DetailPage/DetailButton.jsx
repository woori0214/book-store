// 장바구니 추가 버튼 눌렀을 때, nav의 장바구니 아이콘 위쪽에 숫자 나오도록 구현
import React from 'react';
import styled from 'styled-components';

function DetailButton() {
  return (
    <ButtonWrapper>
      <AddCartButton type="button">장바구니 추가</AddCartButton>
      <OrderButton type="button">바로 주문하기</OrderButton>
    </ButtonWrapper>
  );
}

const AddCartButton = styled.button`
  box-sizing: border-box;
  width: 163px;
  height: 64px;
  border: 2px solid #9e8cec;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  background: #ffffff;
  font-family: 'NotoSansKR-Regular';
  font-size: 20px;
  line-height: 29px;
  margin: 14px 0 0 1184px;
  cursor: pointer;
`;

const OrderButton = styled(AddCartButton)`
  border: 2px solid #6e54e2;
  margin: 14px 0 0 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

export default DetailButton;
