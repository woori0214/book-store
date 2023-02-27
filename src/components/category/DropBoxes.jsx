import React from 'react';
import styled from 'styled-components';

export default function DropBoxes() {
  return (
    <Select style={{ right: '100px' }}>
      <option value="update">최신순</option>
      <option value="recommend">추천순</option>
      <option value="lowerPrice">낮은가격순</option>
      <option value="higherPrice">높은가격순</option>
    </Select>
  );
}

const Choice = [
  { value: 'update', name: '최신순' },
  { value: 'recommend', name: '추천순' },
  { value: 'lowerPrice', name: '낮은가격순' },
  { value: 'higherPrice', name: '높은가격순' }
];

const SelectBox = (props) => {
  return (
    <select>
      {props.select.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

const Select = styled.select`
  margin: 0;
  min-width: 0;
  display: block;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: inherit;
  background-color: transparent;
  &:focus {
    border-color: red;
  }
`;
