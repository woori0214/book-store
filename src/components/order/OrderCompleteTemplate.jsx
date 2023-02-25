import React from 'react';
import styled from 'styled-components';
import CommonButton from 'components/commons/button/Button';
import { useNavigate } from 'react-router-dom';

function OrderCompleteTemplate({ completeMessage, orderInfo, handleLookUp, order }) {
  const navigate = useNavigate();

  const handleMain = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <CompleteImage src="/images/Check.png" alt="완료 이미지" />
      <CompleteMessage>{completeMessage}이 완료되었습니다.</CompleteMessage>
      <OrderInfoBox>
        <OrderInfoContainer>
          {Object.entries(orderInfo).map(([key, value]) => (
            <OrderInfo key={key}>
              <OrderInfoName>{key}</OrderInfoName>
              <OrderInfoValue>{value}</OrderInfoValue>
            </OrderInfo>
          ))}
        </OrderInfoContainer>
      </OrderInfoBox>
      <ButtonWrapper>
        {/* 마이페이지 구현 완료 시 주문내역 확인 버튼 삭제 */}
        {order && (
          <CommonButton
            buttonTitle="주문 내역 확인"
            borderColor="#9E8CEC"
            width="239px"
            margin="47px 0 0 0"
            borderRadius="20px"
            onClick={handleLookUp}
          />
        )}
        <CommonButton
          buttonTitle="메인페이지로 이동"
          width="239px"
          margin={order === 'true' ? '47px 0 0 68px' : '47px auto'}
          borderRadius="20px"
          onClick={handleMain}
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 1219px;
  margin: 0 auto;
`;
const CompleteImage = styled.img`
  margin: 81px 0 0 555px;
`;

const CompleteMessage = styled.h2`
  font-family: 'NotoSansKR-Bold';
  font-weight: 700;
  font-size: 44px;
  line-height: 64px;
  color: #6e54e2;
  margin: 24px 0 0 377px;
`;

const OrderInfoBox = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 1219px;
  height: 469px;
  background-color: #edeafc;
  margin-top: 63px;
  border-radius: 15px;
`;

const OrderInfoContainer = styled.div`
  position: absolute;
`;

const OrderInfo = styled.div`
  &:first-child {
    margin: 57px 0 0 99px;
  }
  margin: 35px 0 0 99px;
  display: flex;
  height: 43px;
  align-items: center;
`;

const OrderInfoName = styled.p`
  font-family: 'NotoSansKR-Bold';
  font-weight: 700;
  font-size: 30px;
  width: 130px;
  text-align: center;
  line-height: 43px;
  color: #6e54e2;
`;

const OrderInfoValue = styled.p`
  font-family: 'NotoSansKR-Medium';
  font-size: 25px;
  line-height: 36px;
  padding-left: 53px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 546px;
  margin: 0 auto;
`;

export default OrderCompleteTemplate;
