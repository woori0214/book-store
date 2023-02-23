import React from 'react';
import styled from 'styled-components';

const Choice = [
  { value: 'update', name: '최신순' },

  { value: 'recommend', name: '추천순' },
  { value: 'lowerPrice', name: '낮은가격순' },
  { value: 'higherPrice', name: '높은가격순' },
];

const SelectBox = props => {
  return (
    <select>
      {props.select.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default function DropBoxes() {
  return <SelectBox options={Choice}></SelectBox>;
}

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
