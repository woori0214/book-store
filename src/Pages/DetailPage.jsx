import React from 'react';
import PageTitle from '../Components/commons/PageTitle';
import BookInfo from '../Components/detail/BookInfo';
import BookQualityGuide from '../Components/detail/BookQualityGuide';

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
