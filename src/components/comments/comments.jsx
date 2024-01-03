import React from 'react';
import Item from './item/item';

function Comments({ items }) {
  return (
    <div
      class='flex flex-col divide-y overflow-y-auto'
      style={{ maxHeight: 104 }}
    >
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Comments;
