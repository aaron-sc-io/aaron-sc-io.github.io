// STYLING
import './App.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// COMPONENTS
import AerynBG from './Components/AerynBG/AerynBG';
import Header from './Components/Header/Header';

// REACT
import { useState, useEffect } from 'react';

const App = () => {
  return (
    <div className='App'>
      <Grid container>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', my: '1em' }}>
              <Header />
            </Box>
          </Grid>
          <Grid item xs={2} />
            <Grid item xs={8}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: '12.5%' }}>
                <AerynBG id='ligma1'/>
              </Box>
            </Grid>
          <Grid item xs={2} />
          <Grid item xs={2} />
            <Grid item xs={8}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: '12.5%' }}>
                <AerynBG id='ligma2' />
              </Box>
            </Grid>
          <Grid item xs={2} />
          <Grid item xs={2} />
            <Grid item xs={8}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: '12.5%' }}>
                <AerynBG id='ligma3'/>
              </Box>
            </Grid>
          <Grid item xs={2} />
        </Grid>
  </div>
  );
}

export default App;
