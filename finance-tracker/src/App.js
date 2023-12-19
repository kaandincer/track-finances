import './App.css';
import React from 'react';
import { Grid, useTheme } from '@mui/material';
import Details from './components/Details';
import Main from './components/Main/Main';

function App() {
  const theme = useTheme();

  const styles = {
    desktop: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    mobile: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    main: {
      [theme.breakpoints.up('sm')]: {
        paddingBottom: '5%',
      },
    },
    last: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(3),
        paddingBottom: '200px',
      },
    },
    grid: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  };

  return (
    <div>
      <Grid className={styles.grid} container spacing={1} alignItems="center" justify="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={4}>
          <Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Main/>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
