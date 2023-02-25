import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderLookUpTemplate from './OrderLookUpTemplate';

function UserOrderLookUp() {
  const location = useLocation();
  const orderCompleteData = location.state?.orderCompleteData;
  console.log('orderCompleteData', orderCompleteData);
  if (orderCompleteData.length > 1) {
    const orderInfo = orderCompleteData.map((obj) => {
      const orderItemCount = obj.orderItemList.length - 1;
      return {
        orderDate: obj.order.createdAt,
        orderNumber: obj.orderItemList[0].orderID,
        orderItem: `${obj.orderItemList[0].bookTitle} 외 ${orderItemCount}개`,
        orderPrice: `${obj.order.totalPrice} 원`,
        orderStatus: obj.order.status
      };
    });
    return <OrderLookUpTemplate title="주문 / 배송 조회" orderInfo={orderInfo} />;
  } else {
    const orderItemCount = nonUserOrderInfo.orderItemList.length - 1;
    const orderInfo = {
      orderDate: nonUserOrderInfo.order.createdAt,
      orderNumber: nonUserOrderInfo.orderItemList[0].orderID,
      orderItem: `${nonUserOrderInfo.orderItemList[0].bookTitle} 외 ${orderItemCount}개`,
      orderPrice: `${nonUserOrderInfo.order.totalPrice} 원`,
      orderStatus: nonUserOrderInfo.order.status
    };
    return <OrderLookUpTemplate title="주문 / 배송 조회" orderInfo={orderInfo} />;
  }
}

export default UserOrderLookUp;
