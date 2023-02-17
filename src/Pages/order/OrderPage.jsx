import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CommonButton from '../../Components/commons/CommonButton';
import PageTitle from '../../Components/commons/PageTitle';
import OrderForm from '../../Components/order/OrderForm';
import OrderList from '../../Components/order/OrderList';

function OrderPage() {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/orderComplete');
  };

  return (
    <>
      <PageTitle title="주문하기" />
      <OrderForm />
      <OrderList />
      <OrderBottomWrapper>
        <TotalPrice>주문 총액 : 15,300원</TotalPrice>
        <CommonButton buttonTitle="주문하기" height="59px" borderRadius="20px" margin="36px 0 0 37px" onClick={handleOrder} />
      </OrderBottomWrapper>
    </>
  );
}
const OrderBottomWrapper = styled.div`
  display: flex;
`;

const TotalPrice = styled.p`
  margin: 47px 0 0 904px;
  font-family: 'NotoSansKR-Bold';
  font-weight: 700;
  font-size: 25px;
  line-height: 36px;
  color: #6E54E2;
`;
export default OrderPage;
