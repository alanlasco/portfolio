import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome';
import Navbar from './components/Navbar';
import { Aboutme } from './components/Aboutme';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome />
      <Aboutme/>   
      <Projects />
      <Contact />
     </div>
  );
}

export default App;
