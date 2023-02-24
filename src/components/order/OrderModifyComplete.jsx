import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import CommonButton from '../commons/button/Button';
import Api from '../../utils/api';

function OrderModifyComplete({ completeMessage }) {
  const navigate = useNavigate();
  const location = useLocation();
  const modifyData = location.state?.modifyData;
  console.log('modifyData', modifyData);

  const modifyInfo = {
    주문번호: `${modifyData.orderItemList[0].orderID}`,
    주문자명: `${modifyData.order.userName}`,
    배송지: `${modifyData.order.address}`,
    연락처: `${modifyData.order.phone}`,
    이메일: `${modifyData.order.email}`
  };

  const handleMain = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <CompleteImage src="/images/Check.png" alt="완료 이미지" />
      <CompleteMessage>{completeMessage}이 완료되었습니다.</CompleteMessage>
      <OrderInfoBox>
        <OrderInfoContainer>
          {Object.entries(modifyInfo).map(([key, value]) => (
            <OrderInfo key={key}>
              <OrderInfoName>{key}</OrderInfoName>
              <OrderInfoValue>{value}</OrderInfoValue>
            </OrderInfo>
          ))}
        </OrderInfoContainer>
      </OrderInfoBox>
      <ButtonWrapper>
        <CommonButton
          buttonTitle="메인페이지로 이동"
          width="239px"
          margin="47px 0 0 0"
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
  /* position: absolute; */
  width: 239px;
  margin: 0 auto;
  /* right: 0; */
`;

export default OrderModifyComplete;
