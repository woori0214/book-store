import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import OrderTemplate from './OrderTemplate';
import CommonButton from '../commons/button/Button';

function OrderList() {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate('/orderComplete');
  };
  return (
    <Wrapper>
      <OrderTemplate templateTitle="주문상품" />
      <OrderListWrapper>
        <OrderItem>
          <OrderItemImage
            src="/images/탈무드.png"
            alt="탈무드 이미지"
            width="100px"
            height=" 100px"
          />
          <OrderItemInfoGroup>
            <OrderItemInfo>탈무드</OrderItemInfo>
            <OrderItemInfo>수량 : 1개</OrderItemInfo>
            <OrderItemInfo>5,400원</OrderItemInfo>
          </OrderItemInfoGroup>
        </OrderItem>
        <OrderItem>
          <OrderItemImage
            src="/images/탈무드.png"
            alt="탈무드 이미지"
            width="100px"
            height=" 100px"
          />
          <OrderItemInfoGroup>
            <OrderItemInfo>탈무드</OrderItemInfo>
            <OrderItemInfo>수량 : 1개</OrderItemInfo>
            <OrderItemInfo>5,400원</OrderItemInfo>
          </OrderItemInfoGroup>
        </OrderItem>
        <OrderItem>
          <OrderItemImage
            src="/images/탈무드.png"
            alt="탈무드 이미지"
            width="100px"
            height=" 100px"
          />
          <OrderItemInfoGroup>
            <OrderItemInfo>탈무드</OrderItemInfo>
            <OrderItemInfo>수량 : 1개</OrderItemInfo>
            <OrderItemInfo>5,400원</OrderItemInfo>
          </OrderItemInfoGroup>
        </OrderItem>
      </OrderListWrapper>
      <OrderBottomWrapper>
        <TotalPrice>주문 총액 : 15,300원</TotalPrice>
        <CommonButton
          buttonTitle="주문하기"
          height="59px"
          borderRadius="20px"
          margin="36px 0 0 37px"
          onClick={handleOrder}
        />
      </OrderBottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 1254px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`;

const OrderListWrapper = styled.div`
  margin: 31px 0 0 34px;
  box-sizing: border-box;
  width: 1220px;
  height: 370px;
  border-radius: 15px;
  background-color: white;
  border: 4px solid #edeafc;
  overflow: auto;
`;

const OrderItem = styled.div`
  display: flex;
  margin: 57px 0 0 37px;
`;

const OrderItemImage = styled.img`
  width: 100px;
  height: 100px;
`;

const OrderItemInfo = styled.p`
  &:first-child {
    margin: 10px 0 0 27px;
    font-family: 'NotoSansKR-Bold';
    font-weight: 700;
  }
  margin: 5px 0 0 27px;
  font-family: 'NotoSansKR-Medium';
  font-size: 16px;
  line-height: 23px;
`;

const OrderItemInfoGroup = styled.div``;

const OrderBottomWrapper = styled.div`
  position: relative;
  display: flex;
`;

const TotalPrice = styled.p`
  margin: 47px 0 0 821px;
  width: 244px;
  font-family: 'NotoSansKR-Bold';
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
  color: #6e54e2;
`;

export default OrderList;
