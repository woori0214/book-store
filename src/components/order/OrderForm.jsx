import React, { useState } from 'react';
import styled from 'styled-components';
import CommonButton from '../commons/button/Button';
import OrderTemplate from './OrderTemplate';
import OrderList from './OrderList';
import OrderFormTemplate from './OrderFormTemplate';

function OrderForm() {
  const [ordererInfo, setOrdererInfo] = useState({
    ordererName: '',
    ordererEmail: '',
    ordererPhone: '',
    ordererAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newOrderInfo = { ...ordererInfo };
    newOrderInfo[name] = value;
    setOrdererInfo(newOrderInfo);
    console.log(ordererInfo);
  };

  return (
    <Wrapper>
      <OrderTemplate templateTitle="주문정보" />
      <OrderFormTemplate handleChange={handleChange} ordererInfo={ordererInfo} />
      <OrderList ordererInfo={ordererInfo} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 1254px;
  margin-top: 34px;
  margin-left: auto;
  margin-right: auto;
`;

export default OrderForm;
