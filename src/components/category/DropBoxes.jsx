import React from 'react';

export default function DropBoxex() {
  return (
    <select>
      <option value="update">최신순</option>
      <option value="recommend">추천순</option>
      <option value="lowerPrice">낮은가격순</option>
      <option value="higherPrice">높은가격순</option>
    </select>
  );
}
