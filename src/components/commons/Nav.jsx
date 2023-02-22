import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import search from './img/search.png';
import cart from './img/shopping-cart.png';
import myPage from './img/my-page.png';
import logo from './img/logo.png';
import './Nav.css';
// 중복 스타일적용

const LogoStyle = styled(NavLink)`
  padding-left: 15%;
  color: black;
  margin: 3.5%;
  font-size: 1.3em;
`;
const NavMiddleStyle = styled(NavLink)`
  color: black;
  border-radius: 18px;
  padding: 20px;
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
      <div>
        <span id="logo">
          <LogoStyle to="/">
            <img src={logo} alt="" />
          </LogoStyle>
        </span>
      </div>
      <div className="span">
        <span>
          <NavMiddleStyle to="/category/1">자기개발서적</NavMiddleStyle>
        </span>
        <span>
          <NavMiddleStyle to="/category/2">소설책</NavMiddleStyle>
        </span>
        <span>
          <NavMiddleStyle to="/category/3">만화책</NavMiddleStyle>
        </span>
        <span>
          <NavMiddleStyle to="/category/4">아동책</NavMiddleStyle>
        </span>
        {/* 경로 추가 */}
      </div>
      <div className="last">
        <span>
          <NavLink to="/">
            <img src={search} alt="search" id="search" />
          </NavLink>
        </span>
        <span>
          <NavLink to="/">
            <img src={cart} alt="cart" id="cart" />
          </NavLink>
        </span>
        <span>
          <NavLink to="/">
            <img src={myPage} alt="mypage" id="mypage" />
          </NavLink>
        </span>
      </div>
    </div>
  );
}

// const NavBarClass = styled.div`
//   margin-top: 1.5%;
//   background-color: #ffffff;
//   border-radius: 4px;
//   width: 100%;
//   height: 10%;
// `;

// const NavBarClassSpan = styled.span`
//   text-decoration-line: none;
// `;

// "id": "5",
// "name": "멋진 신세계",
// "imgsrc": "/image/1.png",
// "price": 5900,
// "stock": 44,
// "quantity": 7,
// "lastUpdate": "20230218T09:00:00",
// "category": "2"
// },
// {
// "id": "6",
// "name": "데미안",
// "image": "",
// "price": 4600,
// "stock": 6,
// "quantity": 10,
// "lastUpdate": "20230218T09:00:00",
// "category": "2"
// },
// {
// "id": "7",
// "name": "어린왕자",
// "image": "",
// "price": 3900,
// "stock": 27,
// "quantity": 13,
// "lastUpdate": "20230218T09:00:00",
// "category": "2"
// },
// {
// "id": "8",
// "name": "눈먼 자들의 도시",
// "image": "",
// "price": 4300,
// "stock": 18,
// "quantity": 8,
// "lastUpdate": "20230218T09:00:00",
// "category": "2"
// },
