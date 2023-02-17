import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navHeader">
      <div>
        <NavLink to="/">이상한 나라의 책장수</NavLink>
      </div>
      <div>
        <NavLink to="/selfDevelopment">자기개발서</NavLink>
      </div>
      <div>
        <NavLink to="/novel">소설</NavLink>
      </div>
      <div>
        <NavLink to="/cartoon">만화</NavLink>
      </div>
      <div>
        <NavLink to="/kids">아동책</NavLink>
      </div>
      <div>
        <NavLink to="/cart">icon(cart)</NavLink>
      </div>
      <div>
        <NavLink to="/login">로그인</NavLink>
      </div>
      <div>
        <NavLink to="/myPage">마이페이지</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
