import React from 'react';
import PageTitle from '../components/commons/pageTitle/PageTitle';
import BookInfo from '../components/detail/BookInfo';
import BookQualityGuide from '../components/detail/BookQualityGuide';

function DetailPage() {
  return (
    <>
      <PageTitle title="도서 정보" />
      <BookInfo />
      <BookQualityGuide />
    </>
  );
}

export default DetailPage;
