import React from 'react';

function Item({ title, value }) {
  return (
    <div class='flex flex-col space-y-2 py-6'>
      <span>{title}</span>
      <span>{value}</span>
    </div>
  );
}

export default Item;
