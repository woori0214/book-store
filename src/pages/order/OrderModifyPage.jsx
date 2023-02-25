import styled from 'styled-components';
import PageTitle from '../../components/commons/pageTitle/PageTitle';
import { useLocation } from 'react-router-dom';
import OrderModifyForm from '../../components/order/OrderModifyForm';

function OrderModifyPage() {
  const location = useLocation();
  const initialOrderInfo = location.state.initialOrdererInfo;

  const initialOrdererInfo = initialOrderInfo.order;
  const orderId = initialOrderInfo.orderItemList[0].orderID;

  console.log('initialOrdererInfo', initialOrdererInfo);
  console.log('orderId', orderId);

  return (
    <>
      <PageTitle title="주문 정보 수정" />
      <FormWrapper>
        <OrderModifyForm initialOrdererInfo={initialOrdererInfo} orderId={orderId} />
      </FormWrapper>
    </>
  );
}

const FormWrapper = styled.div`
  margin-top: 66px;
`;
export default OrderModifyPage;
