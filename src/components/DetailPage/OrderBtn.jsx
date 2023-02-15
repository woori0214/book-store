import React from 'react';
import styled from 'styled-components';

function AddCartBtn() {
  return <AddItemButton type="button">장바구니 추가</AddItemButton>;
}
export default AddCartBtn;

const AddItemButton = styled.button`
  box-sizing: border-box;
  width: 163px;
  height: 64px;
  border: 2px solid #9e8cec;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  background: #ffffff;
  font-family: 'NotoSansKR-Regular';
  font-size: 20px;
  line-height: 29px;
  margin: 14px 0 0 1184px;
  cursor: pointer;
`;
