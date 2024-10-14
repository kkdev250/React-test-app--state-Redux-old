import React from 'react';
import './App.css';
import InputComponent from './components/InputComponent';
import ButtonComponent from './components/ButtonComponent';
import TextComponent from './components/TextComponent';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div className="top-section">
            <InputComponent />
            <ButtonComponent />
          </div>
          <TextComponent />
        </header>
      </div>
  );
}

export default App;