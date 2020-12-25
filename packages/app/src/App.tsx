import React from 'react';
import logo from './logo.svg';
import { Text } from '@ui/shared';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text>Shared component package</Text>
      </header>
    </div>
  );
}

export default App;
