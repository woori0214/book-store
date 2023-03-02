import React, { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import axios from 'axios';

export default function PageList(props) {
  const { changePage, page, category } = props;
  const [maxBooks, setMaxBooks] = useState(1);
  const perPage = 4;

  useEffect(() => {
    console.log('category', category);
    async function getData() {
      const res = await axios.get('http://elice.iptime.org:8080/api/books/countBookByCategory', {
        params: {
          category
        }
      });
      setMaxBooks(res.data);
    }
    getData();
  }, [page, category]);
  return (
    <PaginationBox>
      <Pagination
        activePage={page}
        onChange={changePage}
        itemsCountPerPage={perPage} // 한 페이지랑 보여줄 아이템 갯수
        totalItemsCount={maxBooks} // 총 아이템 갯수
        pageRangeDisplayed={3} // paginator의 페이지 범위
      />
    </PaginationBox>
  );
}

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #b1aeaf;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: black;
    background-color: #edeafc;
  }

  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: black;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #6e54e2;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: black;
    backgorund-color: #6e54e2;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
