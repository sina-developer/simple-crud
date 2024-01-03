import { Grid } from '@mui/material';
import React from 'react';
import Item from './item/item';

function Overview({ title, items }) {
  return (
    <div>
      <h5 class='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
        {title}
      </h5>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs>
            <Item {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Overview;
