import React from 'react';
import { useLocation } from 'react-router-dom';
import OrderCompleteTemplate from 'components/order/OrderCompleteTemplate';

function OrderModifyCompletePage() {
  const location = useLocation();
  const modifyData = location.state?.modifyData;
  console.log('modifyData', modifyData);

  const modifyInfo = {
    주문번호: modifyData.orderItemList[0].orderID,
    주문자명: modifyData.order.userName,
    배송지: modifyData.order.address,
    연락처: modifyData.order.phone,
    이메일: modifyData.order.email
  };

  return <OrderCompleteTemplate completeMessage="수정" orderInfo={modifyInfo} />;
}

export default OrderModifyCompletePage;
