import React from 'react';
import styled from 'styled-components';

function OrderFormTemplate({ handleChange, ordererInfo }) {
  return (
    <FormWrapper>
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
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  margin: 1.5rem 0 0 1.2rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  height: auto;
  max-height: 370px;
  border-radius: 15px;
  background-color: #edeafc;
  border: 4px solid #edeafc;
`;

const FormInput = styled.div`
  margin: 1rem 0 0 2rem;
  &:last-child {
    margin-bottom: 1rem;
  }
`;

const InputTitle = styled.label`
  font-family: 'NotoSansKR-Bold';
  font-size: 1.1rem;
  line-height: 27px;
`;

const Star = styled.span`
  color: red;
  margin-right: 1rem;
`;

const Input = styled.input`
  margin-left: 1.5rem;
  width: 85%;
  max-width: 1021px;
  max-height: 42px;
  height: 1.8rem;
  border-radius: 5px;
  padding-left: 1rem;
`;

export default OrderFormTemplate;
