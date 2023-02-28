import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CommonButton from 'components/commons/button/Button';
import OrderTemplate from './OrderTemplate';
import Api from 'utils/api';
import OrderFormTemplate from './OrderFormTemplate';

function OrderModifyForm({ initialOrdererInfo, orderId }) {
  const [ordererInfo, setOrdererInfo] = useState({
    ordererName: initialOrdererInfo.userName,
    ordererEmail: initialOrdererInfo.email,
    ordererPhone: initialOrdererInfo.phone,
    ordererAddress: initialOrdererInfo.address
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newOrderInfo = { ...ordererInfo };
    newOrderInfo[name] = value;
    setOrdererInfo(newOrderInfo);
    console.log(ordererInfo);
  };

  const handleModifyComplete = async () => {
    try {
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

      if (!ordererInfo.ordererName) {
        alert('주문자명을 입력해주세요');
      } else if (!ordererInfo.ordererEmail) {
        alert('이메일을 입력해주세요');
      } else if (!ordererInfo.ordererPhone) {
        alert('연락처를 입력해주세요');
      } else if (!ordererInfo.ordererPhone) {
        alert('배송지를 입력해주세요');
      } else {
        navigate('/orderModifyComplete', {
          state: {
            modifyData: orderInfoResponse.data.result[0]
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  min-width: 453px;
  max-width: 918px;
  margin: 2rem auto 0;
  > button {
    position: absolute;
    right: 0;
  }
`;

export default OrderModifyForm;
