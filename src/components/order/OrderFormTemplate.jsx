import React from 'react';
import styled from 'styled-components';

function OrderFormTemplate({ handleChange, ordererInfo }) {
  return (
    <FormWrapper>
      <InputWrapper>
        <FormInput>
          <Star>*</Star>
          <InputTitle>주문자</InputTitle>
          <Input
            type="text"
            name="ordererName"
            placeholder="이름을 입력해주세요."
            value={ordererInfo.ordererName}
            onChange={handleChange}
          />
        </FormInput>
        <FormInput>
          <Star>*</Star>
          <InputTitle>이메일</InputTitle>
          <Input
            type="email"
            name="ordererEmail"
            placeholder="이메일을 입력해주세요."
            value={ordererInfo.ordererEmail}
            onChange={handleChange}
          />
        </FormInput>
        <FormInput>
          <Star>*</Star>
          <InputTitle>연락처</InputTitle>
          <Input
            type="tel"
            name="ordererPhone"
            placeholder="연락처를 입력해주세요."
            value={ordererInfo.ordererPhone}
            onChange={handleChange}
          />
        </FormInput>
        <FormInput>
          <Star>*</Star>
          <InputTitle>배송지</InputTitle>
          <Input
            type="text"
            name="ordererAddress"
            placeholder="배송지를 입력해주세요."
            value={ordererInfo.ordererAddress}
            onChange={handleChange}
          />
        </FormInput>
      </InputWrapper>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: table;
  margin: 1.5rem 0 0 1.2rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
  height: auto;
  min-height: 235px;
  max-height: 370px;
  border-radius: 15px;
  background-color: #edeafc;
  border: 4px solid #edeafc;
`;

const InputWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const FormInput = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const InputTitle = styled.label`
  font-family: 'NotoSansKR-Bold';
  font-size: 1.1rem;
  line-height: 2rem;
  width: 15%;
  align-items: center;
  text-align: center;
`;

const Star = styled.span`
  color: red;
  width: 5%;
  text-align: end;
  margin-top: 0.7rem;
`;

const Input = styled.input`
  align-items: center;
  max-width: 800px;
  max-height: 42px;
  height: 2rem;
  border-radius: 5px;
  padding-left: 1rem;
  width: 76%;
`;

export default OrderFormTemplate;
