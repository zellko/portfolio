import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { AnimationBG } from './Utils/AnimationBG';
import Header from './Layouts/Header';
import Home from './Routes/home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:name" />
        <Route path="/about" />
        <Route path="/contact" />
      </Routes>
      <AnimationBG />
    </div>
  );
}

export default App;
