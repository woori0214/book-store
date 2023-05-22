import React, { useState } from 'react';
import styled from 'styled-components';
import PageTitle from '../components/commons/pageTitle/PageTitle';
import Button from '../components/commons/button/Button';
import InputBox from '../components/commons/inputBox/InputBox';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  // 아이디 입력
  const handleEmailChange = (e) => {
    const newUser = JSON.parse(JSON.stringify(user));

    newUser.email = e.target.value;
    setUser(newUser);
  };

  // 비밀번호 입력
  const handlePasswordChange = (e) => {
    const newUser = JSON.parse(JSON.stringify(user));

    newUser.password = e.target.value;
    setUser(newUser);
  };

  // 로그인 버튼 클릭시
  const handleSubmit = async (e) => {
    e.preventDefault();

    const baseURL = 'http://elice.iptime.org:5052/api';

    if (!user.email) {
      alert('아이디를 입력 해주세요.');
      return;
    }

    if (
      !user.email.match(new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i))
    ) {
      alert('이메일 형식에 맞게 입력해주세요.');
      setUser({
        email: '',
        password: ''
      });
      return;
    }

    if (!user.password) {
      alert('비밀번호를 입력 해주세요.');
      return;
    }

    await axios
      .post(`${baseURL}/auth`, user)
      .then((response) => {
        const accessToken = response.data.token;
        const refreshToken = response.data.refreshToken;
        const role = response.data.userRole;
        secureLocalStorage.setItem('Auth', accessToken);
        secureLocalStorage.setItem('RefreshAuth', refreshToken);
        secureLocalStorage.setItem('Role', role);

        navigate('/');
      })
      .catch((error) => {
        // console.log(error)
        alert('회원이 아니거나 비밀번호가 틀렸습니다.');
        setUser({
          email: '',
          password: ''
        });
      });
  };

  // 회원가입 버튼 클릭
  const handleSignUpClick = () => {
    navigate('/signUp');
  };

  // 비회원 주문조회 버튼 클릭
  const handleSearchOrderInfo = () => {
    navigate('/nonUserLogin');
  };

  return (
    <LoginContainer>
      <PageTitle title="로그인" />
      <LoginForm onSubmit={handleSubmit}>
        <div>
          <InputBox inputValue="이메일" id="email" type="text" value={user.email} onChange={handleEmailChange} />
          <InputBox
            inputValue="비밀번호"
            id="password"
            type="password"
            autoComplete="on"
            value={user.password}
            onChange={handlePasswordChange}
          />
        </div>
        <Button buttonTitle="로그인" width="400px" margin="40px 0" borderRadius="25px" type="submit" />
      </LoginForm>
      <ButtonListContainer>
        <ButtonList onClick={handleSignUpClick}>회원가입</ButtonList>
        <ButtonList>아이디 찾기</ButtonList>
        <ButtonList>비밀번호 찾기</ButtonList>
        <ButtonList onClick={handleSearchOrderInfo}>비회원 주문조회</ButtonList>
      </ButtonListContainer>
    </LoginContainer>
  );
}

export default LoginPage;

const LoginContainer = styled.div`
  width: 60%;
  margin: 10rem auto 258px;
`;

const LoginForm = styled.form`
  width: 400px;
  margin: 80px auto 0 auto;
  text-align: center;
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
