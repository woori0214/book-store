import Button from 'components/commons/button/Button';
import PageTitle from 'components/commons/pageTitle/PageTitle';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Api from 'utils/api';

function ChangePassword() {
  const [changePassword, setChangePassword] = useState({
    currentPassword: '',
    newPassword: '',
    newPasswordConfirm: ''
  });

  const location = useLocation();
  const userData = location.state.userData;
  console.log('userData', userData);

  const handleChange = (e) => {
    setChangePassword({
      ...changePassword,
      [e.target.name]: e.target.value
    });
  };

  console.log('changePassword', changePassword);

  const handleChangeSubmit = async () => {
    if (changePassword.currentPassword === '') {
      alert('현재 비밀번호를 입력해주세요!');
    } else if (changePassword.newPassword === '') {
      alert('새 비밀번호를 입력해주세요!');
    } else if (changePassword.newPasswordConfirm === '') {
      alert('새 비밀번호 확인을 입력해주세요!');
    } else {
      try {
        if (changePassword.currentPassword === changePassword.newPassword) {
          alert('입력한 새 비밀번호와 현재 비밀번호가 일치합니다!');
        } else if (changePassword.newPassword !== changePassword.newPasswordConfirm) {
          alert('새 비밀번호가 일치하지 않습니다!');
        } else {
          const response = await Api.put('/users/mydetail/password', {
            currentPassword: changePassword.currentPassword,
            newPassword: changePassword.newPassword
          });
          console.log('response', response);
          if (response.data.Error === 'Your password is incorrect') {
            alert('현재 비밀번호가 일치하지 않습니다!');
          }
          if (response.data.acknowledged) {
            alert('비밀번호가 변경되었습니다!');
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <PageTitle title="비밀번호 변경" />
      <ChangePasswordBox>
        <FormContainer>
          <FormInput>
            <InputTitle>현재 비밀번호</InputTitle>
            <Input
              type="password"
              name="currentPassword"
              placeholder="현재 비밀번호를 입력해주세요."
              value={changePassword.currentPassword}
              onChange={handleChange}
            />
          </FormInput>
          <FormInput>
            <InputTitle>새 비밀번호</InputTitle>
            <Input
              type="password"
              name="newPassword"
              placeholder="새 비밀번호를 입력해주세요."
              value={changePassword.newPassword}
              onChange={handleChange}
            />
          </FormInput>
          <FormInput>
            <InputTitle>새 비밀번호 확인</InputTitle>
            <Input
              type="password"
              name="newPasswordConfirm"
              placeholder="새 비밀번호를 한번 더 입력해주세요."
              value={changePassword.newPasswordConfirm}
              onChange={handleChange}
            />
          </FormInput>
        </FormContainer>
      </ChangePasswordBox>
      <ButtonContainer>
        <Button
          buttonTitle="변경"
          width="100px"
          height="40px"
          fontSize="1rem"
          borderColor="#bbb2e9"
          borderRadius="15px"
          onClick={handleChangeSubmit}
        />
      </ButtonContainer>
    </>
  );
}

const ChangePasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  min-width: 400px;
  max-width: 700px;
  height: 270px;
  background-color: #edeafc;
  margin: 3rem auto 0;
  border-radius: 15px;
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const FormInput = styled.div`
  display: flex;
  width: 90%;
  gap: 1rem;
  align-items: center;
  text-align: center;
`;

const InputTitle = styled.label`
  font-family: 'NotoSansKR-Bold';
  font-size: 1.16rem;
  width: 30%;
  min-width: 100px;
`;

const Input = styled.input`
  width: 60%;
  padding: 3px 0 3px 15px;
  border-radius: 5px;
  font-family: 'NotoSansKR-Medium';
`;

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  margin: 2rem auto 0;
  gap: 3rem;
  width: 70%;
  min-width: 420px;
  justify-content: center;
`;

export default ChangePassword;
