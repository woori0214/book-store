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
          <img
            src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936456788.jpg"
            alt=""
            style={{
              width: '12vw',
              height: '27vh',
            }}
          />
        </BookSpan>
        <BookSpan>
          <img
            src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788972976189.jpg"
            alt=""
            style={{
              width: '12vw',
              height: '27vh',
            }}
          />
        </BookSpan>
        <BookSpan>
          <img
            src="https://contents.kyobobook.co.kr/sih/fit-in/280x0/pdt/9791187444725.jpg"
            alt=""
            style={{
              width: '12vw',
              height: '27vh',
            }}
          />
        </BookSpan>
        <BookSpan>
          <img
            src="https://image.aladin.co.kr/product/425/46/cover150/신암행어사.jpg"
            alt=""
            style={{
              width: '12vw',
              height: '27vh',
            }}
          />
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

// const BookImgSize = {
//   width:30%,
//   height: 25vh
// }
/* TO-DO : img별 bottom값 적용시키기 */
/* TO-DO : hover 이미지 적용시키기 */
