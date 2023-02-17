import React from 'react';
import styled from 'styled-components';

function OrderComplete({ completeMessage }) {
  return (
    <>
      <CompleteImage src="/images/Check.png" alt="완료 이미지" />
      <CompleteMessage>
        {completeMessage}
        이 완료되었습니다.
      </CompleteMessage>
    </>

  );
}

const CompleteImage = styled.img`
  margin: 81px 0 0 666px;
`;

const CompleteMessage = styled.h2`
  font-family: 'NotoSansKR-Bold';
  font-weight: 700;
  font-size: 44px;
  line-height: 64px;
  color: #6E54E2;
  margin: 24px 0 0 488px;
`;

export default OrderComplete;
