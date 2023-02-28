import React from 'react';
import styled from 'styled-components';

function OrderTemplate({ templateTitle }) {
  return <TemplateTitle>{templateTitle}</TemplateTitle>;
}

const TemplateTitle = styled.div`
  width: 5rem;
  max-width: 90px;
  height: 2.1rem;
  max-height: 38px;
  border: 2px solid #6e54e2;
  border-radius: 30px;
  font-family: 'NotoSansKR-Medium';
  font-size: 1rem;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default OrderTemplate;
