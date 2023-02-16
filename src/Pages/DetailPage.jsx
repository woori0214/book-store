import React from 'react';
import PageTitle from '../components/commons/PageTitle';
import BookInfo from '../components/detail/BookInfo';

function DetailPage() {
  return (
    <>
      <PageTitle title="도서 정보" />
      <BookInfo />
    </>
  );
}

export default DetailPage;
