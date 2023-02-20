import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './Nav.css';

// 중복 스타일적용

const LogoStyle = styled(NavLink)`
  color: black;
  margin: 3.5%;
  font-size: 1.3em;
`;
const NavStyle = styled(NavLink)`
  color: black;
  margin: 1.5%;
  padding: 1.2%;
  border-radius: 18px;
  &.active {
    background-color: #9e8cec;
    color: white;
  }

  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    background-color: #edeafc;
    color: black;
  }
`;

export default function Nav() {
  return (
    <div className="NavBarClass">
      <span>
        <LogoStyle to="/">이상한 나라의 책장수</LogoStyle>
      </span>
      <span>
        <NavStyle to="/category/1">자기개발서적</NavStyle>
      </span>
      <span>
        <NavStyle to="/category/2">소설책</NavStyle>
      </span>
      <span>
        <NavStyle to="/category/3">만화책</NavStyle>
      </span>
      <span>
        <NavStyle to="/category/4">아동책</NavStyle>
      </span>
      {/* 경로 추가 */}
      <div>
        <span>
          <NavLink to="/">아이콘</NavLink>
        </span>
        <span>
          <NavLink to="/">카트</NavLink>
        </span>
        <span>
          <NavLink to="/">마이페이지</NavLink>
        </span>
      </div>
    </div>
  );
}
