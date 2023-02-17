import React from 'react';
import PageTitle from '../../Components/commons/PageTitle';
import OrderForm from '../../Components/order/OrderForm';
import OrderList from '../../Components/order/OrderList';

function OrderPage() {
  return (
    <>
      <PageTitle title="주문하기" />
      <OrderForm />
      <OrderList />
    </>
  );
}
export default OrderPage;
