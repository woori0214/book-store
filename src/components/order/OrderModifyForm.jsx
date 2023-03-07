import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import CommonButton from 'components/commons/button/Button';
import OrderTemplate from './OrderTemplate';
import Api from 'utils/api';
import axios from 'axios';
import OrderFormTemplate from './OrderFormTemplate';
import PageTitle from 'components/commons/pageTitle/PageTitle';

function OrderModifyForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialOrderInfo = location.state.initialOrdererInfo;
  const initialOrdererInfo = initialOrderInfo.order;
  const orderId = initialOrderInfo.orderItemList[0].orderID;

  const [ordererInfo, setOrdererInfo] = useState({
    ordererName: initialOrdererInfo.userName,
    ordererEmail: initialOrdererInfo.email,
    ordererPhone: initialOrdererInfo.phone,
    ordererAddress: initialOrdererInfo.address
  });

  console.log('initialOrdererInfo', initialOrdererInfo);
  console.log('orderId', orderId);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newOrderInfo = { ...ordererInfo };
    newOrderInfo[name] = value;
    setOrdererInfo(newOrderInfo);
    console.log(ordererInfo);
  };

  const handleModifyComplete = async () => {
    if (!ordererInfo.ordererName) {
      alert('주문자명을 입력해주세요');
    } else if (!ordererInfo.ordererEmail) {
      alert('이메일을 입력해주세요');
    } else if (!ordererInfo.ordererPhone) {
      alert('연락처를 입력해주세요');
    } else if (!ordererInfo.ordererPhone) {
      alert('배송지를 입력해주세요');
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
          const response = await Api.put(
            '/orders',
            {
              userName: `${ordererInfo.ordererName}`,
              email: `${ordererInfo.ordererEmail}`,
              phone: `${ordererInfo.ordererPhone}`,
              address: `${ordererInfo.ordererAddress}`
            },
            {
              params: {
                orderID: orderId
              }
            }
          );
          const orderInfoResponse = await Api.get(`/orders/${orderId}`);
          console.log('resData', response);
          console.log('orderInfoResponse', orderInfoResponse.data.result[0]);
          navigate('/orderModifyComplete', {
            state: {
              modifyData: orderInfoResponse.data.result[0]
            }
          });
        } else {
          const response = await axios.put(
            'http://elice.iptime.org:8080/api/orders/noMemberOrder',
            {
              userName: `${ordererInfo.ordererName}`,
              email: `${ordererInfo.ordererEmail}`,
              phone: `${ordererInfo.ordererPhone}`,
              address: `${ordererInfo.ordererAddress}`
            },
            {
              params: {
                orderID: orderId
              }
            }
          );
          const orderInfoResponse = await axios.get(`http://elice.iptime.org:8080/api/orders/noMemberOrder/${orderId}`);
          console.log('resData', response);
          console.log('orderInfoResponse', orderInfoResponse.data[0]);
          navigate('/orderModifyComplete', {
            state: {
              modifyData: orderInfoResponse.data[0]
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
      <PageTitle title="주문 정보 수정" />
      <ModifyWrapper>
        <OrderTemplate templateTitle="주문정보" />
        <OrderFormTemplate handleChange={handleChange} ordererInfo={ordererInfo} />
        <CommonButton
          buttonTitle="수정 완료"
          borderColor="#9E8CEC"
          width="120px"
          height="50px"
          fontSize="1.3rem"
          lineHeight="2.5rem"
          borderRadius="15px"
          margin="2.5rem auto 0"
          onClick={handleModifyComplete}
        />
      </ModifyWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 22rem;
`;

const ModifyWrapper = styled.div`
  position: relative;
  width: 90%;
  min-width: 453px;
  max-width: 918px;
  margin: 3rem auto 0;
  > button {
    position: absolute;
    right: 0;
  }
`;

export default OrderModifyForm;
