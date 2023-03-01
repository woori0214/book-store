import React from 'react';
import styled from 'styled-components';
import RecommendBooks from '../components/main/RecommendBooks';

export default function Main() {
  const title1 = '이상한 나라에서 살아 남는 법 ...';
  const title2 = '" 남의 책을 읽는 시간을 보내라';
  const title3 = '남이 고생한 것에 의해 쉽게 자신을 개선할 수 있다. "';
  return (
    <div>
      <MainTitle>
        <p>{title1}</p>
        <p>{title2}</p>
        <p>{title3}</p>
      </MainTitle>
      <RecommendBookWrapper>
        <RecommendBooks />
      </RecommendBookWrapper>
    </div>
  );
}

const MainTitle = styled.div`
  left: 50%;
  margin-top: 5%;
  margin-bottom: 10%;
  font-family: 'Cormorant Garamond';
  font-size: 1.4em;
  font-style: normal;
  font-weight: 400;
  text-align: center;
`;

const RecommendBookWrapper = styled.div`
  margin: 5%;
`;
