import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import OrderTemplate from './OrderTemplate';
import CommonButton from '../commons/button/Button';
// import api from '../../utils/api';
import axios from 'axios';

function OrderList({ ordererInfo }) {
  const navigate = useNavigate();

  const getOrderItems = localStorage.getItem('test-1');
  const orderItemList = JSON.parse(getOrderItems);

  const getTotalPrice = localStorage.getItem('totalPrice');

  const handleOrder = () => {
    const postOrder = async () => {
      try {
        const response = await axios.post(
          'http://elice.iptime.org:8080/order/create',
          {
            userName: `${ordererInfo.ordererName}`,
            email: `${ordererInfo.ordererEmail}`,
            phone: `${ordererInfo.ordererPhone}`,
            address: `${ordererInfo.ordererAddress}`,
            orderItemList,
            totalPrice: `${getTotalPrice}`,
            userDbId: '63f43ffc0c47ceb602b27567',
          }
        );

        console.log('resData', response.data.order);

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
            state: response.data.order,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    postOrder();
  };

  return (
    <Wrapper>
      <OrderTemplate templateTitle="주문상품" />
      <OrderListWrapper>
        {orderItemList.map(item => (
          <OrderItem key={item.id}>
            <OrderItemImage
              src={`${item.imageURL}`}
              alt="도서 이미지"
              width="100px"
              height=" 100px"
            />
            <div>
              <OrderItemInfo>{item.title}</OrderItemInfo>
              <OrderItemInfo>{`수량: ${item.stock}`}</OrderItemInfo>
              <OrderItemInfo>{`${item.price} 원`}</OrderItemInfo>
            </div>
          </OrderItem>
        ))}
      </OrderListWrapper>
      <OrderBottomWrapper>
        <TotalPrice>{`주문 총액 : ${getTotalPrice} 원`}</TotalPrice>
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
