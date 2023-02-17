import React from 'react';
import styled from 'styled-components';

function Button({
  buttonTitle,
  width,
  height,
  borderColor,
  borderRadius,
  margin,
}) {
  return (
    <ButtonContainer
      type="button"
      width={width}
      height={height}
      borderColor={borderColor}
      borderRadius={borderRadius}
      margin={margin}
    >
      {buttonTitle}
    </ButtonContainer>
  );
}

export default Button;
