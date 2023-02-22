import React from 'react';
import styled from 'styled-components';

function OrderTemplate({ templateTitle }) {
  return <TemplateTitle>{templateTitle}</TemplateTitle>;
}

const TemplateTitle = styled.div`
  width: 100px;
  height: 38px;
  border: 2px solid #6e54e2;
  border-radius: 30px;
  font-family: 'NotoSansKR-Medium';
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default OrderTemplate;
