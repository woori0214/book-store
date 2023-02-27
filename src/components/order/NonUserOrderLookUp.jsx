import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OrderLookUpTemplate from './OrderLookUpTemplate';
import Api from 'utils/api';

function NonUserOrderLookUp() {
  const [nonUserOrderData, setNonUserOrderData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const nonUserOrderId = location.state?.nonUserOrderId;
  console.log('nonUserOrderId', nonUserOrderId);

  useEffect(() => {
    const getNonUserOrderData = async () => {
      const response = await Api.get(`/orders/${nonUserOrderId}`);
      console.log(response.data.result);
      setNonUserOrderData(response.data.result);
      setIsLoading(false);
      console.log(response);
    };
    getNonUserOrderData();
  }, []);

  if (!isLoading) {
    const orderInfo = nonUserOrderData.map((obj) => {
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

export default NonUserOrderLookUp;
