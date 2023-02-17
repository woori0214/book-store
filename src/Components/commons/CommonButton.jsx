// 장바구니 추가 버튼 눌렀을 때, nav의 장바구니 아이콘 위쪽에 숫자 나오도록 구현
import React from 'react';
import styled from 'styled-components';

function CommonButton({ buttonTitle, width, height, borderColor, borderRadius, margin }) {
  return (
    <Button type="button" width={width} height={height} borderColor={borderColor} borderRadius={borderRadius} margin={margin}>
      {buttonTitle}
    </Button>
  );
}

const Button = styled.button`
  box-sizing: border-box;
  width: ${(props) => props.width || '163px'};
  height: ${(props) => props.height || '64px'};
  border: 2px solid;
  border-color: ${(props) => props.borderColor || '#6e54e2'};
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.borderRadius || '30px'};
  background: #ffffff;
  font-family: 'NotoSansKR-Regular';
  font-size: 20px;
  line-height: 29px;
  margin: ${(props) => props.margin || '0'};
  cursor: pointer;
`;

export default CommonButton;
