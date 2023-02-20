import React from 'react';
import book1 from './1.png';
import book2 from './2.png';
import book3 from './3.png';
import book4 from './4.png';
import './RecommendBooks.css';

export default function RecommendBooks() {
  return (
    <div className="Recommend-Book-Class">
      <div>
        <p id="Recommend-Title">책 장수 추천도서</p>
      </div>
      <div className="Recommend-Book-List">
        <span>
          <img src={book1} alt="" />
        </span>
        <span>
          <img src={book2} alt="" />
        </span>
        <span>
          <img src={book3} alt="" />
        </span>
        <span>
          <img src={book4} alt="" />
        </span>
      </div>
    </div>
  );
}
