import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderLookUpTemplate from './OrderLookUpTemplate';

function NonUserOrderLookUp() {
  const location = useLocation();
  const nonUserOrderInfo = location.state?.nonUserOrderInfo;
  console.log('nonUserOrderInfo', nonUserOrderInfo);

  const orderItemCount = nonUserOrderInfo.orderItemList.length - 1;
  const orderInfo = {
    orderDate: nonUserOrderInfo.order.createdAt,
    orderNumber: nonUserOrderInfo.orderItemList[0].orderID,
    orderItem: `${nonUserOrderInfo.orderItemList[0].bookTitle} 외 ${orderItemCount}개`,
    orderPrice: `${nonUserOrderInfo.order.totalPrice} 원`,
    orderStatus: nonUserOrderInfo.order.status
  };

  console.log('orderInfo', orderInfo);

  return (
    <>
      <OrderLookUpTemplate title="비회원 주문 / 배송 조회" orderInfo={orderInfo} />
    </>
  );
}

export default NonUserOrderLookUp;
