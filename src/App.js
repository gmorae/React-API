import React from 'react';
import './App.css';
import Rodape from './common/Rodape'
import Card from './common/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card></Card>
        <Rodape></Rodape>
      </header>
    </div>
  );
}

export default App;
