import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import cart from './img/shopping-cart.png';
import myElice from './img/myElice.png';
import logo from './img/logo.png';
// 중복 스타일적용

// const ButtonStyle = styled(button)`
//   text-align: center;
// `;
// const navigator = useNavigate();

// const cartPageMove = () => {
//   navigator('../../pages/MainPage');
// };

export default function Nav() {
  return (
    <NavBarClass>
      <div>
        <LogoStyle to="/">
          <img src={logo} alt="" />
        </LogoStyle>
      </div>

      <MiddleNavBar>
        <MiddleSpan>
          <Category to="/category/1">자기개발서적</Category>
        </MiddleSpan>
        <MiddleSpan>
          <Category to="/category/2">소설책</Category>
        </MiddleSpan>
        <MiddleSpan>
          <Category to="/category/3">만화책</Category>
        </MiddleSpan>
        <MiddleSpan>
          <Category to="/category/4">아동책</Category>
        </MiddleSpan>
      </MiddleNavBar>

      <EndClass>
        <EndDiv>
          <CartNavBar to="/">
            <IconSize src={cart} alt="cart" />
          </CartNavBar>
        </EndDiv>
        <EndDiv>
          <LoginButton type="button">로그인</LoginButton>
        </EndDiv>
        <EndDiv>
          <MyElice to="/">
            <MyEliceSize src={myElice} alt="mypage" id="mypage" />
          </MyElice>
        </EndDiv>
      </EndClass>
    </NavBarClass>
  );
}

const NavBarClass = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5%;
  background-color: #ffffff;
  border-radius: 4px;
  // width: 100%;
  // height: 10%;
  border-bottom: 2px solid #b5b5b5;
`;

const LogoStyle = styled(NavLink)`
  padding-left: 20%;
`;
const Category = styled(NavLink)`
  color: black;
  border-radius: 18px;
  padding: 10%;
  padding-left: 30px;
  padding-right: 30px;
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

const MiddleNavBar = styled.div`
  display: flex;
  margin-left: 10%;
  width: 70%;
`;

const MiddleSpan = styled.div`
  padding: 2%;
`;

const EndClass = styled.div`
  display: flex;
`;
const EndDiv = styled.div`
  display: iline-block;
  justify-content: center;
`;

const CartNavBar = styled(NavLink)`
  margin: 25%;
`;
const LoginButton = styled.button``;
const MyElice = styled(NavLink)`
  padding: 25%;
`;
const IconSize = styled.img`
  width: 2vw;
  height: 3.5vh;
`;

const MyEliceSize = styled.img`
  width: 3vw;
  hegiht: 3.5vh;
`;
