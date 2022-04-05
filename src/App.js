import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Projects" element={<Projects />} />
    </Routes>
    </div>
  );
}

export default App;