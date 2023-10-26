import React from 'react';
import './App.css';
import { Welcome } from './components/Welcome';
import Navbar from './components/Navbar';
import { Aboutme } from './components/Aboutme';
import { Projects } from './components/Projects';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome />
      <Aboutme/>   
      <Projects />
     </div>
  );
}

export default App;
