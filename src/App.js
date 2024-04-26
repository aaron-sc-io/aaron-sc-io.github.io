// STYLING
import './App.css'
import { Box } from '@mui/material';

// COMPONENTS
import AerynBG from './Components/AerynBG/AerynBG';
import Header from './Components/Header/Header';

// // REACT
// import { useState, useEffect } from 'react';
// import Header from './Components/Header/Header';

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {

  // }, [setLoading]);

  return (
    <div className='App'>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', mt: '10px' }}>
        <Box sx={{ display: 'flex', alignSelf: 'center' }}>
          <Header />
        </Box>
        <AerynBG />
      </Box>
    </div>
  );
}

export default App;
