import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import OrderTemplate from './OrderTemplate';
import CommonButton from 'components/commons/button/Button';
import Api from 'utils/api';
import calculatePrice from 'utils/calculatePrice';

function OrderList({ ordererInfo, setOrdererInfo }) {
  const navigate = useNavigate();

  const orderItems = localStorage.getItem('books');
  const orderItemList = JSON.parse(orderItems);
  const totalPrice = calculatePrice(orderItemList);

  // if (!user.email) {
  //   alert('아이디를 입력 해주세요.');
  //   return;
  // }

  // if (
  //   !user.email.match(new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i))
  // ) {
  //   alert('이메일 형식에 맞게 입력해주세요.');
  //   setUser({
  //     email: '',
  //     password: ''
  //   });
  //   return;
  // }

  const handleOrder = async () => {
    console.log(!ordererInfo.ordererPhone.match(new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)) === null);
    if (!ordererInfo.ordererName) {
      alert('주문자명을 입력해주세요.');
    } else if (!ordererInfo.ordererEmail) {
      alert('이메일을 입력해주세요.');
    } else if (!ordererInfo.ordererPhone) {
      alert('연락처를 입력해주세요.');
    } else if (!ordererInfo.ordererAddress) {
      alert('배송지를 입력해주세요.');
    } else if (
      !ordererInfo.ordererEmail.match(
        new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)
      )
    ) {
      alert('이메일 형식에 맞게 입력해주세요.');
    } else if (!ordererInfo.ordererPhone.match(new RegExp(/^01([0|1|6|7|8|9])*-([0-9]{3,4})*-([0-9]{4})$/))) {
      alert('전화번호를 010-0000-0000 이나 010-000-0000 형식으로 입력해주세요.');
    } else {
      try {
        const isUser = localStorage.getItem('Auth');
        console.log('isUser', isUser);
        console.log('isUserCheck', isUser !== null);
        if (isUser !== null) {
          const response = await Api.post('/orders', {
            userName: `${ordererInfo.ordererName}`,
            email: `${ordererInfo.ordererEmail}`,
            phone: `${ordererInfo.ordererPhone}`,
            address: `${ordererInfo.ordererAddress}`,
            orderItemList,
            totalPrice
          });

          console.log('resData', response);

          navigate('/orderComplete', {
            state: {
              orderData: response.data
            }
          });
        } else {
          const response = await Api.post('/orders/nomemberorder', {
            userName: `${ordererInfo.ordererName}`,
            email: `${ordererInfo.ordererEmail}`,
            phone: `${ordererInfo.ordererPhone}`,
            address: `${ordererInfo.ordererAddress}`,
            orderItemList,
            totalPrice
          });

          console.log('nonUserResData', response);

          navigate('/orderComplete', {
            state: {
              orderData: response.data
            }
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Wrapper>
      <OrderTemplate templateTitle="주문상품" />
      <OrderListWrapper>
        {orderItemList.map((item) => (
          <OrderItem key={item.id}>
            <OrderItemImage src={`${item.imageUrl}`} alt="도서 이미지" width="100px" height=" 100px" />
            <OrderItemInfoBox>
              <OrderItemInfo>{item.title}</OrderItemInfo>
              <OrderItemInfo>{`수량: ${item.quantity}`}</OrderItemInfo>
              <OrderItemInfo>{`${item.salePrice} 원`}</OrderItemInfo>
            </OrderItemInfoBox>
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
          fontSize="1.4rem"
          lineHeight="36px"
          borderRadius="10px"
          margin="1.7rem 0 0 2rem"
          onClick={handleOrder}
        />
      </OrderBottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // position: absolute;
  width: 100%;
  max-width: 900px;
  margin: 2.5rem auto 1.8rem;
`;

const OrderListWrapper = styled.div`
  margin: 1.5rem 0 0 1.2rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  height: auto;
  max-height: 235px;
  border-radius: 15px;
  background-color: white;
  border: 4px solid #edeafc;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const OrderItem = styled.div`
  display: flex;
  margin: 1.1% 0 0 2rem;
  &:last-child {
    margin-bottom: 1.1%;
  }
`;

const OrderItemImage = styled.img`
  width: 8%;
  height: 1%;
  min-width: 50px;
  max-width: 100px;
  max-height: 100px;
`;

const OrderItemInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  justify-content: space-evenly;
`;

const OrderItemInfo = styled.p`
  &:first-child {
    font-family: 'NotoSansKR-Bold';
  }
  &:last-child {
    margin-bottom: 0;
  }
  vertical-align: middle;
  margin: 0 0 0 2rem;
  font-family: 'NotoSansKR-Medium';
  font-size: 0.9rem;
  line-height: 0.6rem;
`;

const OrderBottomWrapper = styled.div`
  // position: absolute;
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
