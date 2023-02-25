import React from 'react';
import PageTitle from '../../components/commons/pageTitle/PageTitle';
import OrderForm from '../../components/order/OrderForm';
import OrderList from '../../components/order/OrderList';

function OrderPage() {
  return (
    <>
      <PageTitle title="주문하기" />
      <OrderForm />
    </>
  );
}
export default OrderPage;
