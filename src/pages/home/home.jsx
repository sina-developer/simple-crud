import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import structure from '../../data/structure.json';
import SectionLoader from '../../components/section-loader';
import Layout from '../../components/layout';


export default function Home() {
  return (
    <Layout>
      <div className='w-full max-w-4xl' data-testid="home-container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {structure.map((section) => {
              return (
                <Grid key={section.id} item xs={section.grid_columns * 4}>
                  <SectionLoader {...section} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </Layout>
  );
}
