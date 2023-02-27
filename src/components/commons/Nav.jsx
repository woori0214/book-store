import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
// 중복 스타일적용

export default function Nav() {
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await axios
        .get('http://localhost:8080/categories')
        .then((res) => {
          console.log(res);
          setCategory(res.data);
          setLoading(true);
        })
        .catch((error) => {
          console.log('실패');
        });
    }
    getData();
  }, []);

  return (
    <NavBarClass>
      <div>
        <LogoStyle to="/">
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" />
        </LogoStyle>
      </div>

      <MiddleNavBar>
        {loading
          ? category.map((categoryTitle, index) => (
              // const categoryId = "/category/"+categoryTitle._id
              <MiddleSpan key={'category' + index}>
                <Category to={'/category/' + categoryTitle._id} key={categoryTitle._id}>
                  {categoryTitle.category}
                </Category>
              </MiddleSpan>
            ))
          : ''}
      </MiddleNavBar>

      <EndClass>
        <EndDiv onClick={() => navigate('/shoppingCart')}>
          <CartNavBar to="/">
            <IconSize src={process.env.PUBLIC_URL + '/images/navBarShoppingCart.png'} alt="cart" />
          </CartNavBar>
        </EndDiv>
        <EndDiv>
          {!localStorage.getItem('Auth') ? (
            <LoginButton type="button" onClick={() => navigate('/login')}>
              로그인
            </LoginButton>
          ) : (
            <LoginButton
              type="button"
              onClick={() => {
                localStorage.removeItem('Auth');
                navigate('/');
              }}
            >
              로그아웃
            </LoginButton>
          )}
        </EndDiv>
        <EndDiv>
          <MyElice to="/">
            <MyEliceSize src={process.env.PUBLIC_URL + '/images/navBarMyElice.png'} alt="mypage" id="mypage" />
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
  border-bottom: 2px solid #b5b5b5;
`;

const LogoStyle = styled(NavLink)`
  padding-left: 20%;
`;

const Category = styled(NavLink)`
  font-size: 1.5em;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 18px;
  padding: 5%;
  color: black;
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
  width: 100%;
  padding: 2%;
  text-align: center;
`;

const EndClass = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  height: 100%;
`;

const EndDiv = styled.div`
  display: iline-block;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CartNavBar = styled(NavLink)`
  width: 100%;
  height: 100%;
`;

const LoginButton = styled.button`
  background-color: #edeafc;
  border-radius: 18px;
`;

const MyElice = styled(NavLink)`
  width: 100%;
  height: 100%;
`;

const IconSize = styled.img`
  width: 2vw;
  height: 3.5vh;
`;

const MyEliceSize = styled.img`
  width: 3vw;
  hegiht: 3.5vh;
`;
