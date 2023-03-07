import React, { useState } from 'react';
import styled from 'styled-components';
import OrderTemplate from './OrderTemplate';
import OrderList from './OrderList';
import OrderFormTemplate from './OrderFormTemplate';
import PageTitle from 'components/commons/pageTitle/PageTitle';

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
    <>
      <PageTitle title="주문하기" />
      <Wrapper>
        <OrderTemplate templateTitle="주문정보" />
        <OrderFormTemplate handleChange={handleChange} ordererInfo={ordererInfo} />

        <OrderList ordererInfo={ordererInfo} setOrdererInfo={setOrdererInfo} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  min-width: 453px;
  max-width: 920px;
  margin: 1.5rem auto 0;
`;

export default OrderForm;
