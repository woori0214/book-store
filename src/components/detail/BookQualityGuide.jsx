import React from 'react';
import styled from 'styled-components';

function BookQualityGuide() {
  const guide = [
    {
      category: '상',
      status: '새것에 가까운 책',
      cover: '변색 없음, 찢어진 흔적 없음<br/>닳은 흔적 없음, 낙서 없음<br/>얼룩 없음, 양장본의 겉표지 있음',
      spine: '변색 없음, 낙서 없음<br/>닳은 흔적 없음, 얼룩 없음',
      binding: '변색 없음, 낙서 없음, 변형 없음<br/>얼룩 없음, 접힌 흔적 없음<br/>제본 탈착 없음'
    },
    {
      category: '중',
      status: '약간의 사용감은 있으나 깨끗한 책',
      cover: '희미한 변색이나 작은 얼룩이 있음<br/>찢어진 흔적 없음<br/>약간의 모서리 해짐<br/>낙서 없음, 양장본의 겉표지 있음',
      spine: '희미한 변색이나 작은 얼룩이 있음<br/>약간의 닳은 흔적 있음<br/>낙서 없음',
      binding: '변색 없음, 낙서 없음, 변형 없음<br/>아주 약간의 접힌 흔적 있음<br/>얼룩 없음, 제본 탈착 없음'
    },
    {
      category: '하',
      status: '사용감이 많으며 헌 느낌이 나는 책',
      cover: '전체적인 변색, 모서리 해짐 있음<br/>2cm 이하의 찢어짐, 오염 있음<br/>낙서 있음, 양장본의 겉표지 없음',
      spine: '전체적인 변색, 모서리 해짐 있음<br/>오염 있음, 낙서 있음(이름 포함)',
      binding: '변색 있음, 2cm 이하 찢어짐 있음<br/>5쪽 이하의 필기 및 밑줄 있음<br/>얼룩 및 오염 있음, 제본 탈착 없음'
    }
  ];

  return (
    <Wrapper>
      <GuideTitle>품질 판정 가이드</GuideTitle>
      <GuideTable>
        <GuideTr>
          <GuideTh>구분</GuideTh>
          <GuideTh>헌 상태</GuideTh>
          <GuideTh>표지</GuideTh>
          <GuideTh>책등 / 책배</GuideTh>
          <GuideTh>내부 / 제본상태</GuideTh>
        </GuideTr>
        {guide.map((obj) => (
          <GuideTr key={obj.category}>
            {Object.values(obj).map((values) => (
              <GuideTd
                key={values}
                dangerouslySetInnerHTML={{
                  __html: values
                }}
              />
            ))}
          </GuideTr>
        ))}
      </GuideTable>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position:relative;
  width: 1315px;
  height: 600px;
  margin-top: 171px;
  margin-left:auto;
  margin-right:auto;
`;

const GuideTitle = styled.h2`
  font-family: 'NotoSansKR-Medium';
  font-size: 30px;
  line-height: 43px;
  margin-left: 49px;
`;

const GuideTable = styled.table`
  width: 1315px;
  height: 480px;
  margin-top: 27px;
  border-collapse: collapse;
  box-sizing:border-box;
  border: 1px solid #D0C5FE;
`;

const GuideTh = styled.th`
  font-family: 'NotoSansKR-Medium';
  height: 77px;
  background-color: #edeafc;
  font-size: 23px;
  line-height: 33px;
  text-align: center;
  border: 1px solid #D0C5FE;
`;

const GuideTr = styled.tr`

`;

const GuideTd = styled.td`
  border: 1px solid #D0C5FE;
  width: 308px;
  font-size: 18px;
  line-height: 29px;
  font-family: 'NotoSansKR-Medium';
  padding-left: 15px;

  &:first-child {
    padding: 0;
    width: 84px;
    font-size: 23px;
    line-height: 33px;
    text-align: center;
  }
  &:nth-child(2) {
    padding: 0;
    width: 307px;
    text-align: center;
  }
`;

export default BookQualityGuide;
