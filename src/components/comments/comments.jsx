import React from 'react';
import Item from './item/item';

function Comments({ title, items }) {
  return (
    <div data-testid="comments">
      <h5 class='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
        {title}
      </h5>
      <div
        class='flex flex-col divide-y overflow-y-auto'
        style={{ maxHeight: 104 }}
        data-testid="comments-list"
      >
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
