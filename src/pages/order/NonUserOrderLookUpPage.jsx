import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderLookUpTemplate from 'components/order/OrderLookUpTemplate';
import Api from 'utils/api';
import axios from 'axios';

function NonUserOrderLookUpPage() {
  const [nonUserOrderData, setNonUserOrderData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const nonUserOrderId = location.state?.nonUserOrderId;
  console.log('nonUserOrderId', nonUserOrderId);

  useEffect(() => {
    const getNonUserOrderData = async () => {
      const response = await axios.get(`http://elice.iptime.org:8080/api/orders/noMemberOrder/${nonUserOrderId}`);
      console.log(response.data);
      setNonUserOrderData(response.data);
      setIsLoading(false);
      console.log(response);
    };
    getNonUserOrderData();
  }, []);

  const handleModify = async () => {
    const response = await axios.get(`http://elice.iptime.org:8080/api/orders/noMemberOrder/${nonUserOrderId}`);
    const initialOrdererInfo = response.data[0];
    console.log(response.data[0]);
    navigate('/orderModify', {
      state: {
        initialOrdererInfo: initialOrdererInfo
      }
    });
  };

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
    return <OrderLookUpTemplate title="주문 / 배송 조회" orderInfo={orderInfo} handleModify={handleModify} />;
  }
}
export default NonUserOrderLookUpPage;
