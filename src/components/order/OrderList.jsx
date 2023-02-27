import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import OrderTemplate from './OrderTemplate';
import CommonButton from 'components/commons/button/Button';
import Api from 'utils/api';
import calculatePrice from 'utils/calculatePrice';

function OrderList({ ordererInfo }) {
  const navigate = useNavigate();

  const orderItems = localStorage.getItem('books');
  const orderItemList = JSON.parse(orderItems);
  const totalPrice = calculatePrice(orderItemList);

  const handleOrder = async () => {
    try {
      const response = await Api.post('/orders', {
        userName: `${ordererInfo.ordererName}`,
        email: `${ordererInfo.ordererEmail}`,
        phone: `${ordererInfo.ordererPhone}`,
        address: `${ordererInfo.ordererAddress}`,
        orderItemList,
        totalPrice,
        userID: '63f7c9e661dcba07b90725f2'
      });

      console.log('resData', response);

      if (!ordererInfo.ordererName) {
        alert('주문자명을 입력해주세요');
      } else if (!ordererInfo.ordererEmail) {
        alert('이메일을 입력해주세요');
      } else if (!ordererInfo.ordererPhone) {
        alert('연락처를 입력해주세요');
      } else if (!ordererInfo.ordererPhone) {
        alert('배송지를 입력해주세요');
      } else {
        navigate('/orderComplete', {
          state: {
            orderData: response.data
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <OrderTemplate templateTitle="주문상품" />
      <OrderListWrapper>
        {orderItemList.map((item) => (
          <OrderItem key={item.id}>
            <OrderItemImage src={`${item.imageURL}`} alt="도서 이미지" width="100px" height=" 100px" />
            <div>
              <OrderItemInfo>{item.title}</OrderItemInfo>
              <OrderItemInfo>{`수량: ${item.stock}`}</OrderItemInfo>
              <OrderItemInfo>{`${item.price} 원`}</OrderItemInfo>
            </div>
          </OrderItem>
        ))}
      </OrderListWrapper>
      <OrderBottomWrapper>
        <TotalPrice>{`주문 총액 : ${totalPrice} 원`}</TotalPrice>
        <CommonButton
          buttonTitle="주문하기"
          width="15%"
          minWidth="120px"
          height="3rem"
          borderRadius="10px"
          margin="1.7rem 0 0 2rem"
          onClick={handleOrder}
        />
      </OrderBottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  margin: 2.5rem auto 0;
`;

const OrderListWrapper = styled.div`
  margin: 1.5rem 0 0 1.2rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  height: auto;
  max-height: 370px;
  border-radius: 15px;
  background-color: white;
  border: 4px solid #edeafc;
  overflow: auto;
`;

const OrderItem = styled.div`
  display: flex;
  margin: 1.6% 0 0 2rem;
  &:last-child {
    margin-bottom: 1.6%;
  }
`;

const OrderItemImage = styled.img`
  width: 8%;
  height: 1%;
  min-width: 50px;
  max-width: 100px;
  max-height: 100px;
`;

const OrderItemInfo = styled.p`
  &:first-child {
    font-family: 'NotoSansKR-Bold';
    margin-top: 0.9rem;
  }
  margin: 0.8rem 0 0 2rem;
  font-family: 'NotoSansKR-Medium';
  font-size: 1rem;
  line-height: 0.8rem;
`;

const OrderBottomWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
`;

const TotalPrice = styled.p`
  margin: 2rem 0 0 0;
  width: 85%;
  font-family: 'NotoSansKR-Bold';
  font-size: 1.4rem;
  line-height: 36px;
  color: #6e54e2;
  text-align: end;
`;

export default OrderList;
