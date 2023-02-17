import React from 'react';
import styled from 'styled-components';
import OrderTemplate from './OrderTemplate';

function OrderList() {
  return (
    <Wrapper>
      <OrderTemplate templateTitle="주문상품" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 60px;
`;

export default OrderList;
