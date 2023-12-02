import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './routes/navbar/navbar.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import Projects from './routes/projects/projects.components';
import Contact from './routes/contact/contact.component';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
