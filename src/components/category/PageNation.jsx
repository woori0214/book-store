import React from 'react';
import Pagination from 'react-js-pagination';

export default function PageList(props) {
  const { changePage, page } = props;
  // const handlePage = (nextPage) => {
  //   setPage(nextPage);
  // };
  return (
    <Pagination
      activePage={page}
      onChange={changePage}
      itemsCountPerPage={4} // 한 페이지랑 보여줄 아이템 갯수
      totalItemsCount={32} // 총 아이템 갯수
      pageRangeDisplayed={3} // paginator의 페이지 범위
    />
  );
}
