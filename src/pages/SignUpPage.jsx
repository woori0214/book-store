import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/commons/PageTitle';
import Button from '../components/commons/button/Button';

function SignUpPage() {
  return (
    <>
      <PageTitle title="회원가입" />
      <div>
        <ul>
          <li>
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" />
          </li>
          <li>
            <label htmlFor="password">비밀번호</label>
            <input type="text" id="password" />
          </li>
          <li>
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input type="text" id="confirmPassword" />
          </li>
          <li>
            <label htmlFor="name">이름</label>
            <input type="text" id="name" />
          </li>
          <li>
            <label htmlFor="phoneNumber">휴대폰 번호</label>
            <input type="text" id="phoneNumber" />
          </li>
          <li>
            <label htmlFor="address">주소</label>
            <input type="text" id="address" />
          </li>
        </ul>
        <Button />
        <Button />
      </div>
    </>
  );
}

export default SignUpPage;
