import styled from 'styled-components';

export const ButtonContainer = styled.button`
  box-sizing: border-box;
  width: ${(props) => props.width || '163px'};
  min-width: ${(props) => props.minWidth || null};
  max-width: ${(props) => props.maxWidth || null};
  height: ${(props) => props.height || '64px'};
  max-height: ${(props) => props.maxHeight || null};
  border: 2px solid;
  border-color: ${(props) => props.borderColor || '#6e54e2'};
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) => props.borderRadius || '30px'};
  background: #ffffff;
  font-family: 'NotoSansKR-Regular';
  font-size: ${(props) => props.fontSize || '30px'};
  line-height: ${(props) => props.lineHeight || '29px'};
  margin: ${(props) => props.margin || '0'};
  cursor: pointer;
`;
