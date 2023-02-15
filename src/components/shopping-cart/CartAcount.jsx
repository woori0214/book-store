import React from 'react';
import styled from 'styled-components';

function CartAcount({ amount }) {
  let deliveryFee = 3000;

  if (!amount) {
    deliveryFee = 0;
  }

  return (
    <PaymentArea>
      <PaymentResult>
        <Amount>
          <AmountItem>
            <Span>총 상품금액</Span>
            <SpanPrice>{`${amount}원`}</SpanPrice>
          </AmountItem>
          <AmountDelivery>
            <Span>배송비</Span>
            <SpanPrice>{`${deliveryFee}원`}</SpanPrice>
          </AmountDelivery>
        </Amount>
        <Total>
          <PurpleSpan>결제예상금액</PurpleSpan>
          <PurpleSpan>{`${amount + deliveryFee}원`}</PurpleSpan>
        </Total>
      </PaymentResult>
    </PaymentArea>
  );
}

export default CartAcount;

const PaymentArea = styled.div`
  flex-basis: 30%;
  padding-top: 44.4px;
`;

const PaymentResult = styled.div``;

const Amount = styled.div`
  padding: 25px;
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
`;

const Span = styled.span`
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #bdbdbd;
`;

const SpanPrice = styled(Span)`
  color: #000000;
`;

const PurpleSpan = styled(Span)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #6e54e2;
`;

const AmountItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const AmountDelivery = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;
