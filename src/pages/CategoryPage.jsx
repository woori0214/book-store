import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/commons/Nav';
import BookList from '../components/category/BookList';
import PageList from '../components/category/PageNation';
import './Paging.css';

export default function CategoryPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('loading..');
  const [description, setDescription] = useState('loading..');
  const [page, setPage] = useState(1);

  const changePage = (nextPage) => {
    setPage(nextPage);
  };

  // 함수 내에서 async await함수를 만들어서 호출하는 것이다.
  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://localhost:8080/category/', {
        params: {
          id
        }
      });
      // console.log(res);
      setTitle(res.data[0].title);
      setDescription(res.data[0].description);
    }
    getData();
  });

  // 페이지 초기화
  useEffect(() => {
    setPage(1);
  }, [id]);

  // 추천순, 재고순 클릭시 페이지초기화를 같이 해줘야한다.

  return (
    <div>
      <Nav />
      <TitleDescription>
        <MainTitle>{title}</MainTitle>
        <pre
          style={{
            marginleft: '30%'
          }}
        >
          {description}
        </pre>
        <BookList categoryId={id} page={page} />
      </TitleDescription>
      <PageList changePage={changePage} page={page} />
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
  font-size: 1.3em;
  font-weight: bolder;
`;
