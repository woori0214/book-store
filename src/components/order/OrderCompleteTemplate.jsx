import React from 'react';
import styled from 'styled-components';
import CommonButton from 'components/commons/button/Button';
import { useNavigate } from 'react-router-dom';

function OrderCompleteTemplate({ completeMessage, orderInfo }) {
  const navigate = useNavigate();

  localStorage.removeItem('books');

  const handleMain = () => {
    navigate('/');
  };
  console.log('orderInfo', orderInfo);

  return (
    <Wrapper>
      <CompleteTitleBox>
        <CompleteImage src="/images/Check.png" alt="완료 이미지" />
        <CompleteMessage>{completeMessage}이 완료되었습니다.</CompleteMessage>
      </CompleteTitleBox>
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
        <CommonButton
          buttonTitle="메인페이지로 이동"
          width="190px"
          fontSize="1.3rem"
          lineHeight="2.5rem"
          margin="47px auto"
          borderRadius="20px"
          onClick={handleMain}
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  min-width: 453px;
  max-width: 1219px;
  margin: 3rem auto 2.2rem;
`;

const CompleteTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CompleteImage = styled.img`
  margin: 4.5rem auto 0;
  width: 10%;
  min-width: 60px;
  max-width: 90px;
`;

const CompleteMessage = styled.h2`
  font-family: 'NotoSansKR-Bold';
  font-size: 2.4rem;
  line-height: 4rem;
  color: #6e54e2;
  margin: 1.3rem auto 0;
`;

const OrderInfoBox = styled.div`
  display: table;
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
  min-height: 370px;
  max-height: 469px;
  background-color: #edeafc;
  margin: 3rem auto 0;
  border-radius: 15px;
`;

const OrderInfoContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const OrderInfo = styled.div`
  &:last-child {
    margin-bottom: 0;
  }
  margin-bottom: 2%;
  display: flex;
  align-items: center;
`;

const OrderInfoName = styled.p`
  font-family: 'NotoSansKR-Bold';
  font-size: 1.75rem;
  width: 30%;
  text-align: center;
  line-height: 2.7rem;
  color: #6e54e2;
`;

const OrderInfoValue = styled.p`
  font-family: 'NotoSansKR-Medium';
  width: 70%;
  font-size: 1.44rem;
  line-height: 2.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default OrderCompleteTemplate;
