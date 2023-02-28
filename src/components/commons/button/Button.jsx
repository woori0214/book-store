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
  isDisabled,
  maxWidth,
  minWidth,
  maxHeight,
  fontSize,
  lineHeight
}) {
  return (
    <ButtonContainer
      type={type}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      maxHeight={maxHeight}
      borderColor={borderColor}
      borderRadius={borderRadius}
      margin={margin}
      onClick={onClick}
      disabled={isDisabled}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {buttonTitle}
    </ButtonContainer>
  );
}

export default Button;
