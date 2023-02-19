import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div className="NavBarClass">
      <span>
        <NavLink to="/">이상한 나라의 책장수</NavLink>
      </span>
      <span>
        <NavLink to="/category/1">자기개발서적</NavLink>
      </span>
      <span>
        <NavLink to="/category/2">소설책</NavLink>
      </span>
      <span>
        <NavLink to="/category/3">만화책</NavLink>
      </span>
      <span>
        <NavLink to="/category/4">아동책</NavLink>
      </span>
      {/* 경로 추가 */}
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
  );
}
