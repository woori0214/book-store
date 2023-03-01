import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OrderLookUpTemplate from './OrderLookUpTemplate';
import axios from 'axios';

function NonUserOrderLookUp() {
  const [nonUserOrderData, setNonUserOrderData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const nonUserOrderId = location.state?.nonUserOrderId;
  console.log('nonUserOrderId', nonUserOrderId);

  useEffect(() => {
    const getNonUserOrderData = async () => {
      const response = await axios.get(`http://elice.iptime.org:8080/orders/noMemberOrder/${nonUserOrderId}`);
      // console.log(response.data.result);
      setNonUserOrderData(response.data);
      setIsLoading(false);
      console.log('response', response.data);
    };
    getNonUserOrderData();
  }, []);

  console.log('nonUserOrderData', nonUserOrderData);

  if (!isLoading) {
    const orderItemCount = nonUserOrderData.orderItemList.length - 1;
    const orderInfo = {
      orderDate: nonUserOrderData.orderList.createdAt,
      orderNumber: nonUserOrderData.orderItemList[0].orderID,
      orderItem: `${nonUserOrderData.orderItemList[0].bookTitle} 외 ${orderItemCount}개`,
      orderPrice: `${nonUserOrderData.orderList.totalPrice} 원`,
      orderStatus: nonUserOrderData.orderList.status
    };
    return <OrderLookUpTemplate title="주문 / 배송 조회" orderInfo={orderInfo} />;
  }
}

export default NonUserOrderLookUp;
