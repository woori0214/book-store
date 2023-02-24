import OrderComplete from '../../components/order/OrderComplete';
import OrderTemplate from '../../components/order/OrderTemplate';
import OrderModifyComplete from '../../components/order/OrderModifyComplete';
function OrderModifyCompletePage() {
  return (
    <OrderModifyComplete completeMessage="정보 수정" ModifyComplete="true" />
  );
}

export default OrderModifyCompletePage;
