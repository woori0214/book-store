import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookList from '../components/category/BookList';
import PagenationList from '../components/category/PageNation';
import DropBox from '../components/category/DropBoxes';

export default function CategoryPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('loading..');
  const [description, setDescription] = useState('loading..');
  const [page, setPage] = useState(1);
  const [sortedPage, setSortedPage] = useState(0);

  const changeSortedPage = (nextSort) => {
    setSortedPage(nextSort.target.value);
  };

  const changePage = (nextPage) => {
    setPage(nextPage);
  };

  // Title과 Description id받아오기
  useEffect(() => {
    async function getData() {
      const res = await axios
        .get('http://elice.iptime.org:8080/api/categories', {
          params: {
            id
          }
        })
        .then((res) => {
          console.log(res);
          setTitle(res.data.category);
          setDescription(res.data.description);
        })
        .catch((error) => {
          console.log('실패');
        });
    }
    getData();
  });

  // 페이지 초기화
  useEffect(() => {
    setPage(1);
    // setSortedPage(0);
  }, [id]);

  useEffect(() => {
    console.log(sortedPage);
    setPage(1);
  }, [sortedPage]);

  // 추천순, 재고순 클릭시 페이지초기화를 같이 해줘야한다.

  return (
    <div>
      <TitleDescription>
        <MainTitle>{title}</MainTitle>
        <pre
          style={{
            marginLeft: '4%'
          }}
        >
          {description}
        </pre>
        <div style={{ width: '100%', marginLeft: '85%' }}>
          <DropBox changeSortedPage={changeSortedPage} sortedPage={sortedPage} />
        </div>
        <BookList categoryId={id} page={page} sortedPage={sortedPage} />
      </TitleDescription>
      <PagenationList changePage={changePage} page={page} category={id} />
    </div>
  );
}
const TitleDescription = styled.div`
  left: 50%;
  margin-top: 5%;
  margin-bottom: 10%;
  margin-left: 8%;
  font-family: 'Cormorant Garamond';
  font-size: 1.1em;
  font-style: normal;
  font-weight: 400;
  text-align: left;
`;

const MainTitle = styled.p`
  font-size: 2em;
  font-weight: bolder;
  margin-bottom: 2%;
`;
