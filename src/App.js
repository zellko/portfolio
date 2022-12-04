import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { AnimationBG } from './Utils/AnimationBG';
import Header from './Layouts/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AnimationBG />
      <Routes>
        <Route path="/" />
        <Route path="/project/:name" />
        <Route path="/about" />
        <Route path="/contact" />
      </Routes>
    </div>
  );
}

export default App;
