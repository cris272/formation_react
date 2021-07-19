import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import {uneVar as uneVar2} from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button />
      {uneVar2}
    </div>
  );
}

export default App;
