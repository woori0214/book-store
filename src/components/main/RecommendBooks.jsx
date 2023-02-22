import React from 'react';
import './RecommendBooks.css';

export default function RecommendBooks() {
  return (
    <div className="Recommend-Book-Class">
      <div>
        <p id="Recommend-Title">책 장수 추천도서</p>
      </div>
      <div className="Recommend-Book-List">
        <span>
          <img src={`${process.env.PUBLIC_URL}/image/1.png`} alt="" />
        </span>
        <span>
          <img src={`${process.env.PUBLIC_URL}/image/2.png`} alt="" />
        </span>
        <span>
          <img src={`${process.env.PUBLIC_URL}/image/3.png`} alt="" />
        </span>
        <span>
          <img src={`${process.env.PUBLIC_URL}/image/4.png`} alt="" />
        </span>
      </div>
    </div>
  );
}
