import React, { useState } from 'react';
import styled from 'styled-components';
import PageTitle from 'components/commons/pageTitle/PageTitle';
import Button from 'components/commons/button/Button';
import InputBox from 'components/commons/inputBox/InputBox';
import { useNavigate } from 'react-router-dom';
import Api from 'utils/api';

function NonUserLoginPage() {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState('');

  const handleChange = (e) => {
    setOrderId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Api.get(`/orders/${orderId}`);
    console.log(response.data.result[0]);
    navigate('/nonUserOrderLookUp', {
      state: {
        nonUserOrderInfo: response.data.result[0]
      }
    });
  };

  return (
    <LoginContainer>
      <PageTitle title="비회원 주문 / 배송 조회" />
      <LoginForm onSubmit={handleSubmit}>
        <div>
          <InputBox inputValue="주문번호" id="ordererName" type="text" value={orderId} onChange={handleChange} />
        </div>
        <Button buttonTitle="주문내역 조회" width="400px" margin="40px 0" borderRadius="25px" type="submit" />
      </LoginForm>
    </LoginContainer>
  );
}

export default NonUserLoginPage;

const LoginContainer = styled.div`
  width: 60%;
  margin: auto;
`;

const LoginForm = styled.form`
  width: 400px;
  margin: 80px auto 0 auto;
  text-align: center;
`;
