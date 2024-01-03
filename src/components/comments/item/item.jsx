import React from 'react';

function Item({ username, comment, date }) {
  return (
    <div class='flex flex-col space-y-2 py-2'>
      <span>{username}</span>
      <span>At : {date}</span>
      <span className='font-bold'>{comment}</span>
    </div>
  );
}

export default Item;
