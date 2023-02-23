import React, { useState } from 'react';
import styled from 'styled-components';
import PageTitle from '../components/commons/pageTitle/PageTitle';
import Button from '../components/commons/button/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  // 아이디 입력
  const handleIdChange = e => {
    const newUser = JSON.parse(JSON.stringify(user));

    newUser.email = e.target.value;
    setUser(newUser);
  };

  // 비밀번호 입력
  const handlePasswordChange = e => {
    const newUser = JSON.parse(JSON.stringify(user));

    newUser.password = e.target.value;
    setUser(newUser);
  };

  // 로그인 버튼 클릭시
  const handleSubmit = async e => {
    e.preventDefault();

    const baseURL = 'http://elice.iptime.org:8080';

    if (!user.email) {
      alert('아이디를 입력 해주세요.');
      return;
    }

    if (
      !user.email.match(
        new RegExp(
          /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
        ),
      )
    ) {
      alert('이메일 형식에 맞게 입력해주세요.');
      setUser({
        email: '',
        password: '',
      });
      return;
    }

    if (!user.password) {
      alert('비밀번호를 입력 해주세요.');
      return;
    }

    await axios
      .post(`${baseURL}/auth`, user)
      .then(response => {
        // const accessToken = response.data;
        console.log(response);
        // localStorage.setItem('Auth', accessToken);

        // navigate('/shoppingCart');
      })
      .catch(error => {
        // console.log(error);
      });
  };

  // 회원가입 버튼 클릭
  const handleSignUpClick = () => {
    navigate('/signUp');
  };

  // 비회원 주문조회 버튼 클릭
  // const handleSearchOrderInfo = () => { };

  return (
    <LoginContainer>
      <PageTitle title="로그인" />
      <LoginForm onSubmit={handleSubmit}>
        <div>
          <LoginInputBox>
            <LoginLabel htmlFor="email">이메일</LoginLabel>
            <LoginInput
              id="email"
              type="text"
              value={user.email}
              onChange={handleIdChange}
            />
          </LoginInputBox>
          <LoginInputBox>
            <LoginLabel htmlFor="password">비밀번호</LoginLabel>
            <LoginInput
              id="password"
              type="password"
              value={user.password}
              onChange={handlePasswordChange}
            />
          </LoginInputBox>
        </div>
        <Button
          buttonTitle="로그인"
          width="400px"
          margin="40px 0"
          borderRadius="25px"
          type="submit"
        />
      </LoginForm>
      <ButtonListContainer>
        <ButtonList onClick={handleSignUpClick}>회원가입</ButtonList>
        <ButtonList>아이디 찾기</ButtonList>
        <ButtonList>비밀번호 찾기</ButtonList>
        <ButtonList>비회원 주문조회</ButtonList>
      </ButtonListContainer>
    </LoginContainer>
  );
}

export default LoginPage;

const LoginContainer = styled.div`
  width: 60%;
  margin: auto;
`;

const LoginForm = styled.form`
  width: 400px;
  margin: 80px auto 0 auto;
  text-align: center;
`;

const LoginInputBox = styled.div`
  position: relative;
  width: 400px;
  height: 62px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const LoginLabel = styled.label`
  position: absolute;
  top: 14px;
  left: 14px;
  font-size: 11px;
  opacity: 0.5;
  line-height: 13px;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 62px;
  padding: 31px 20px 14px 20px;
  border: 1px solid #ddd;
`;

const ButtonListContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const ButtonList = styled.li`
  padding: 0 10px;
  opacity: 0.5;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
