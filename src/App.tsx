import React from 'react';
import './App.css';
import { Greet, Person } from './compnemts';

function App() {
  const personName = {
    first: "sumit",
    last: "kumar"
  }
  return (
    <div className="App">
      <Greet name='Sumit' messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;
