import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import structure from '../../data/structure.json';
import SectionLoader from '../../components/section-loader';
import Layout from '../../components/layout';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
