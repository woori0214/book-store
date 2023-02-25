import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/commons/Nav';
import BookList from '../components/category/BookList';
import PageList from '../components/category/PageNation';
import './Paging.css';
import DropBox from '../components/category/DropBoxes';

export default function CategoryPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('loading..');
  const [description, setDescription] = useState('loading..');
  const [page, setPage] = useState(1);

  const changePage = nextPage => {
    setPage(nextPage);
  };

  // Title과 Description id받아오기
  useEffect(() => {
    async function getData() {
      const res = await axios
        .get('http://localhost:8080/categories', {
          params: {
            id,
          },
        })
        .then(res => {
          console.log(res.data);
          setTitle(res.data.category);
          setDescription(res.data.description);
        })
        .catch(error => {
          console.log('실패');
        });
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
            marginLeft: '4%',
          }}
        >
          {description}
        </pre>
        <div style={{ width: '100%', marginLeft: '85%' }}>
          <DropBox />
        </div>
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
  font-size: 2em;
  font-weight: bolder;
  margin-bottom: 2%;
`;
