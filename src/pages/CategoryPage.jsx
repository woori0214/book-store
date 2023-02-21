import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/commons/Nav';
import BookList from '../components/category/BookList';
import './CategoryPage.css';

export default function CategoryPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('loading..');
  const [description, setDescription] = useState('loading..');

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

  return (
    <div>
      <Nav />
      <div className="title-description">
        <p id="title">{title}</p>
        <pre id="description">{description}</pre>
        {/* <p>{description}</p> */}
        <BookList categoryId={id} />
      </div>
    </div>
  );
}
