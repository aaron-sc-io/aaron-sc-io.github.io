// STYLING
import './App.css'

// COMPONENTS
import Body from "./Components/Body/Body";

// REACT
import { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  }, [setLoading]);

  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
