import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <div>
      <FooterBox>
        <Logo style={{ paddingBottom: '2%' }}>이상한 나라의 책 장수</Logo>
        <ul style={{ right: '25px' }}>
          <Box>주소 : 서울특별시 성동구 아차산로 17길 48</Box>
          <Box style={{ paddingBottom: '2%' }}>
            대표자 책장수 | 직업정보제공사업 신고 번호: A10041004 | 사업자등록번호 123-12-123456 | 전화 080-1234-1234 |
            이메일 contact@bookCaps.io
          </Box>
          <p style={{ paddingBottom: '2%' }}>서비스 이용약관 개인정보처리방침 업데이트 소식 고객센터 책장수 채용</p>
          <Box>Copyright 2022-2023 BookCaps Inc. All Rights Reserved.</Box>
        </ul>
      </FooterBox>
    </div>
  );
}

const FooterBox = styled.footer`
  padding: 2%;
  bottom: 0;
  background-color: #9e8cec;
  font-size: 1.2em;
  width: 100%;
  height: 30%;
  position: relative;
`;

const Logo = styled.p`
  color: #bcb1ea;
  font-size: 1.4em;
  font-weight: bolder;
`;

const Box = styled.p`
  color: #ffffff;
  letter-spacing: 3px;
  margin: 5px;
`;
