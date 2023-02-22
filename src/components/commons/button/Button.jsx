import React from 'react';
import { ButtonContainer } from './Button.styled';

function Button({
  buttonTitle,
  width,
  height,
  borderColor,
  borderRadius,
  margin,
  onClick,
  type,
}) {
  return (
    <ButtonContainer
      type={type}
      width={width}
      height={height}
      borderColor={borderColor}
      borderRadius={borderRadius}
      margin={margin}
      onClick={onClick}
    >
      {buttonTitle}
    </ButtonContainer>
  );
}

export default Button;