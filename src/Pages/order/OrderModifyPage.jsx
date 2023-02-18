import styled from 'styled-components';
import PageTitle from '../../Components/commons/PageTitle';
import OrderForm from '../../Components/order/OrderForm';

function OrderModifyPage() {
  return (

    <>
      <PageTitle title="주문 정보 수정" />
      <FormWrapper>
        <OrderForm modify="true" />
      </FormWrapper>
    </>
  );
}

const FormWrapper = styled.div`
  margin-top: 66px;
`;
export default OrderModifyPage;
