import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Fib Calculator</h1>
          <a href="/">Home</a>
          <a href="/otherpage">Other Page</a>
          <Routes>
            <Route exact path="/" element={<Fib />} />
            <Route exact path="/otherpage" element={<OtherPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
