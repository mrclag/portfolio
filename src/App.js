import React from 'react';
import './App.css';
import Home from './components/Home';
import { GlobalStyles } from './styles/global-styles';

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <Home />
      </GlobalStyles>
    </div>
  );
}

export default App;
