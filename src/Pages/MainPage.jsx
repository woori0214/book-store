import React from 'react';
// import styled from 'styled-components';

export default function Main() {
  return (
    <div className="recommend-books-wrapper">
      <h1>이상한 나라에서 살아 남는 법 ...</h1>
      <h2>남의 책을 읽는 시간을 보내라 남이 고생한 것에 의해 쉽게 자신을 개선할 수 있다.</h2>
      <div className="recommend-books-list-wrapper">
        <ul className="recommend-books-list">
          <li>도서1</li>
          <li>도서2</li>
          <li>도서3</li>
          <li>도서4</li>
        </ul>
      </div>
    </div>
  );
}
