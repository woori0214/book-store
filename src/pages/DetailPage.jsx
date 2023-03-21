import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/commons/pageTitle/PageTitle';
import BookQualityGuide from '../components/detail/BookQualityGuide';
import styled from 'styled-components';
import Button from 'components/commons/button/Button';
import Api from 'utils/api';
import { useParams } from 'react-router-dom';
import BookInfoContext from 'components/detail/BookInfoContext';
import FetchBook from 'components/detail/FetchBook';

function DetailPage() {
  const { id } = useParams();
  return (
    <>
      <Wrapper>
        <PageTitle title="도서 정보" />
        <BookInfoWrapper>
          <Suspense fallback={'Loading...'}>
            <BookInfoContext resource={FetchBook(id)} />
          </Suspense>
        </BookInfoWrapper>
        <BookQualityGuide />
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
`;
const BookInfoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1315px;
  margin: 0 auto;
`;

export default DetailPage;
