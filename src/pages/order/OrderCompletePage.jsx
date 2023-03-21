import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OrderCompleteTemplate from 'components/order/OrderCompleteTemplate';

function OrderCompletePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const orderData = location.state?.orderData;
  console.log('orderData', orderData);

  const orderInfo = {
    주문번호: orderData.orderItem[0].orderID,
    주문자명: orderData.order.userName,
    배송지: orderData.order.address,
    연락처: orderData.order.phone,
    이메일: orderData.order.email
  };

  const handleLookUp = async () => {
    const userId = orderData.order.userID;
    navigate('/orderLookUp', {
      state: {
        orderCompleteUserId: userId
      }
    });
  };

  return <OrderCompleteTemplate completeMessage="주문" orderInfo={orderInfo} handleLookUp={handleLookUp} />;
}

export default OrderCompletePage;
