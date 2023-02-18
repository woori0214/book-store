import React from 'react';
import styled from 'styled-components';

function PageTitle({ title }) {
  return <H1>{title}</H1>;
}

PageTitle.defaultProps = {
  title: '페이지 제목',
};

const H1 = styled.h1`
  margin: 83px 0 0 873px;
  font-family: 'NotoSansKR-Bold';
  font-size: 44px;
  line-height: 64px;
`;

export default PageTitle;
