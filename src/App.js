import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Component/Main';
import './App.css';
import Header from './Component/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Router>
  );
}

export default App;
