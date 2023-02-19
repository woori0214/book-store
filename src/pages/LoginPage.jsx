import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/commons/PageTitle';
import Button from '../components/commons/button/Button';

function LoginPage() {
  return (
    <LoginContainer>
      <PageTitle title="로그인" />
      <LoginForm action="">
        <div>
          <LoginInputBox>
            <LoginLabel htmlFor="">로그인</LoginLabel>
            <LoginInput type="text" />
          </LoginInputBox>
          <LoginInputBox>
            <LoginLabel htmlFor="">비밀번호</LoginLabel>
            <LoginInput type="text" />
          </LoginInputBox>
        </div>
        <Button
          buttonTitle="로그인"
          width="400px"
          margin="40px 0"
          borderRadius="25px"
        />
      </LoginForm>
      <ButtonListContainer>
        <ButtonList>회원가입</ButtonList>
        <ButtonList>아이디 찾기</ButtonList>
        <ButtonList>비밀번호 찾기</ButtonList>
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
  padding-left: 20px;
  opacity: 0.5;
  font-size: 14px;
`;
