import React from 'react';
import PageTitle from '../components/commons/pageTitle/PageTitle';
import BookInfo from '../components/detail/BookInfo';
import BookQualityGuide from '../components/detail/BookQualityGuide';
import styled from 'styled-components';

function DetailPage() {
  return (
    <>
      <Wrapper>
        <PageTitle title="도서 정보" />
        <BookInfo />
        <BookQualityGuide />
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
`;

export default DetailPage;
