import React from 'react';
import styled from 'styled-components';

export default function RecommendBooks() {
  return (
    <RecommendBookClass>
      <div>
        <RecommendTitle>책 장수 추천도서</RecommendTitle>
      </div>
      <RecommendBookList>
        <BookSpan>
          <img src={`${process.env.PUBLIC_URL}/image/1.png`} alt="" />
        </BookSpan>
        <BookSpan>
          <img src={`${process.env.PUBLIC_URL}/image/2.png`} alt="" />
        </BookSpan>
        <BookSpan>
          <img src={`${process.env.PUBLIC_URL}/image/3.png`} alt="" />
        </BookSpan>
        <BookSpan>
          <img src={`${process.env.PUBLIC_URL}/image/4.png`} alt="" />
        </BookSpan>
      </RecommendBookList>
    </RecommendBookClass>
  );
}
const RecommendTitle = styled.p`
  font-family: 'Cormorant Garamond';
  font-style: normal;
  font-weight: 700;
  font-size: 1.4em;
  line-height: 28px;
  margin-left: 2%;
`;
const RecommendBookClass = styled.div`
  background-color: #edeafc;
  border-radius: 15px;
  padding-top: 2%;
  padding-bottom: 5%;
`;
const RecommendBookList = styled.div`
  display: block;
  text-align: center;
`;

const BookSpan = styled.span`
  padding: 5%;
`;

/* TO-DO : img별 bottom값 적용시키기 */
/* TO-DO : hover 이미지 적용시키기 */
