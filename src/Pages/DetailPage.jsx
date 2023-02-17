import React from 'react';
import PageTitle from '../Components/commons/PageTitle';
import BookInfo from '../Components/detail/BookInfo';

function DetailPage() {
  return (
    <>
      <PageTitle title="도서 정보" />
      <BookInfo />
    </>
  );
}

export default DetailPage;
