import OrderComplete from '../../components/order/OrderComplete';
import OrderTemplate from '../../components/order/OrderTemplate';

function OrderCompletePage() {
  return <OrderComplete completeMessage="주문" orderComplete="true" />;
}

export default OrderCompletePage;
