import React from 'react';
import Footer from '../components/commons/Footer';
import Nav from '../components/commons/Nav';
import RecommendBooks from '../components/main/RecommendBooks';
import './MainPage.css';

export default function Main() {
  const title1 = '이상한 나라에서 살아 남는 법 ...';
  const title2 = '" 남의 책을 읽는 시간을 보내라';
  const title3 = '남이 고생한 것에 의해 쉽게 자신을 개선할 수 있다. "';
  return (
    <div>
      <Nav />
      <div className="Main-Title">
        <p>{title1}</p>
        <p>{title2}</p>
        <p>{title3}</p>
      </div>
      <div className="Recommend-Book-Wrapper">
        <RecommendBooks />
      </div>
      <Footer />
    </div>
  );
}
