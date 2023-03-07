import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function DropBoxes(props) {
  const { changeSortedPage, sortedPage } = props;
  useEffect(() => {}, []);

  return (
    <Select style={{ right: '100px' }} onChange={changeSortedPage} value={sortedPage}>
      <option value="0">최신순</option>
      <option value="1">추천순</option>
      <option value="2">낮은가격순</option>
      <option value="3">높은가격순</option>
    </Select>
  );
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
