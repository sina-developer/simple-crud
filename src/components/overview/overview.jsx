import { Grid } from '@mui/material';
import React from 'react';
import Item from './item/item';

function Overview({ items }) {
  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item xs>
          <Item {...item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Overview;
