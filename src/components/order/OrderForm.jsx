import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CommonButton from '../commons/button/Button';
import OrderTemplate from './OrderTemplate';

function OrderForm({ modify }) {
  const navigate = useNavigate();

  const handleModifyComplete = () => {
    navigate('/orderModifyComplete');
  };

  return (
    <Wrapper>
      <OrderTemplate templateTitle="주문정보" />
      <FormWrapper>
        <FormInput>
          <Star>*</Star>
          <InputTitle>주문자</InputTitle>
          <Input
            type="text"
            name="orderUser"
            placeholder="이름을 입력해주세요."
          />
        </FormInput>
        <FormInput>
          <Star>*</Star>
          <InputTitle>이메일</InputTitle>
          <Input
            type="email"
            name="orderUserEmail"
            placeholder="이메일을 입력해주세요."
          />
        </FormInput>
        <FormInput>
          <Star>*</Star>
          <InputTitle>연락처</InputTitle>
          <Input
            type="tel"
            name="orderUserTel"
            placeholder="연락처를 입력해주세요."
          />
        </FormInput>
        <FormInput>
          <Star>*</Star>
          <InputTitle>배송지</InputTitle>
          <Input
            type="text"
            name="orderUserAddress"
            placeholder="배송지를 입력해주세요."
          />
        </FormInput>
      </FormWrapper>
      {modify && (
        <CommonButton
          buttonTitle="수정 완료"
          borderColor="#9E8CEC"
          width="200px"
          height="59px"
          borderRadius="20px"
          margin="49px 0 0 1048px"
          onClick={handleModifyComplete}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 1254px;
  margin-top: 34px;
  margin-left: auto;
  margin-right: auto;
`;

const FormWrapper = styled.form`
  margin: 31px 0 0 34px;
  box-sizing: border-box;
  width: 1220px;
  height: 370px;
  border-radius: 15px;
  background-color: #edeafc;
  border: 4px solid #edeafc;
`;

const FormInput = styled.div`
  &:first-child {
    margin: 50px 0 0 36px;
  }
  margin: 31px 0 0 36px;
`;

const InputTitle = styled.span`
  font-family: 'NotoSansKR-Bold';
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
`;

const Star = styled.span`
  color: red;
  margin-right: 10px;
`;

const Input = styled.input`
  margin-left: 38px;
  width: 1021px;
  height: 42px;
  border-radius: 5px;
  &::placeholder {
    padding-left: 15px;
  }
`;

export default OrderForm;
