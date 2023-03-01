import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import OrderLookUpTemplate from './OrderLookUpTemplate';
import Api from 'utils/api';

function UserOrderLookUp() {
  const [orderData, setOrderData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserOrderData = async () => {
      const response = await Api.get('/users/mydetail/orders');
      console.log('response', response);
      setOrderData(response.data);
      setIsLoading(false);
    };
    getUserOrderData();
  }, []);

  if (!isLoading) {
    const orderInfo = orderData.map((obj) => {
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
  }
}

export default UserOrderLookUp;
