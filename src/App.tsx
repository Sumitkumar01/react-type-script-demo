import React from 'react';
import './App.css';
import { Greet } from './compnemts';

function App() {
  return (
    <div className="App">
      <Greet name='Sumit' messageCount={10} isLoggedIn={false} />
    </div>
  );
}

export default App;
