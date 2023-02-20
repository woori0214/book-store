import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/commons/PageTitle';
import Button from '../components/commons/button/Button';

function SignUpPage() {
  return (
    <>
      <PageTitle title="회원가입" />
      <SignUpContainer>
        <SignUpListContainer>
          <SignUpList>
            <SignUpLabel htmlFor="id">아이디</SignUpLabel>
            <SignUpInput type="text" id="id" />
          </SignUpList>
          <SignUpList>
            <SignUpLabel htmlFor="password">비밀번호</SignUpLabel>
            <SignUpInputPassword type="text" id="password" />
          </SignUpList>
          <SignUpList>
            <SignUpLabel htmlFor="confirmPassword">비밀번호 확인</SignUpLabel>
            <SignUpInputPassword type="text" id="confirmPassword" />
          </SignUpList>
          <SignUpList>
            <SignUpLabel htmlFor="name">이름</SignUpLabel>
            <SignUpInputName type="text" id="name" />
          </SignUpList>
          <SignUpList>
            <SignUpLabel htmlFor="phoneNumber">휴대폰 번호</SignUpLabel>
            <SignUpInputPhoneNumber type="text" id="phoneNumber" />
          </SignUpList>
          <SignUpList>
            <SignUpLabel htmlFor="address">주소</SignUpLabel>
            <SignUpInput type="text" id="address" />
          </SignUpList>
        </SignUpListContainer>
        <Button type="button" buttonTitle="취소" margin="0 60px" />
        <Button type="button" buttonTitle="회원가입" margin="0 60px" />
      </SignUpContainer>
    </>
  );
}

export default SignUpPage;

const SignUpContainer = styled.div`
  width: 50%;
  margin: 60px auto;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.59);
`;

const SignUpListContainer = styled.ul`
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.59);
`;

const SignUpList = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const SignUpLabel = styled.label`
  display: flex;
  align-items: center;
  flex-basis: 20%;
  margin-right: 10px;
  padding-left: 30px;

  height: 100%;
  vertical-align: middle;
  font-weight: 700;
  background: rgba(217, 217, 217, 0.25);
`;

const SignUpInput = styled.input`
  display: block;
  flex-basis: 40%;
  padding-left: 10px;
  height: 40px;

  border: 1px solid rgba(0, 0, 0, 0.31);
`;

const SignUpInputPassword = styled(SignUpInput)`
  flex-basis: 20%;
`;

const SignUpInputName = styled(SignUpInput)`
  flex-basis: 30%;
`;

const SignUpInputPhoneNumber = styled(SignUpInput)`
  flex-basis: 30%;
`;
