import React from 'react';
import styled from 'styled-components';
import OrderTemplate from './OrderTemplate';

function OrderList() {
  return (
    <Wrapper>
      <OrderTemplate templateTitle="주문상품" />
      <OrderListWrapper>
        <OrderItem>
          <OrderItemImage src="/images/탈무드.png" alt="탈무드 이미지" width="100px" height=" 100px" />
          <OrderItemInfoGroup>
            <OrderItemInfo>탈무드</OrderItemInfo>
            <OrderItemInfo>수량 : 1개</OrderItemInfo>
            <OrderItemInfo>5,400원</OrderItemInfo>
          </OrderItemInfoGroup>
        </OrderItem>
        <OrderItem>
          <OrderItemImage src="/images/탈무드.png" alt="탈무드 이미지" width="100px" height=" 100px" />
          <OrderItemInfoGroup>
            <OrderItemInfo>탈무드</OrderItemInfo>
            <OrderItemInfo>수량 : 1개</OrderItemInfo>
            <OrderItemInfo>5,400원</OrderItemInfo>
          </OrderItemInfoGroup>
        </OrderItem>
        <OrderItem>
          <OrderItemImage src="/images/탈무드.png" alt="탈무드 이미지" width="100px" height=" 100px" />
          <OrderItemInfoGroup>
            <OrderItemInfo>탈무드</OrderItemInfo>
            <OrderItemInfo>수량 : 1개</OrderItemInfo>
            <OrderItemInfo>5,400원</OrderItemInfo>
          </OrderItemInfoGroup>
        </OrderItem>
      </OrderListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 60px;
`;

const OrderListWrapper = styled.div`
  margin: 31px 0 0 117px;
  box-sizing: border-box;
  width: 1220px;
  height: 370px;
  border-radius: 15px;
  background-color: white;
  border: 4px solid #EDEAFC;
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
  &:first-child{
    margin: 10px 0 0 27px;
    font-family: 'NotoSansKR-Bold';
    font-weight: 700;
  }
  margin: 5px 0 0 27px;
  font-family: 'NotoSansKR-Medium';
  font-size: 16px;
  line-height: 23px;
`;

const OrderItemInfoGroup = styled.div`
`;

export default OrderList;
