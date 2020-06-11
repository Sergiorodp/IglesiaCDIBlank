import React from 'react';
import './App.css';
import Nav from './Components/navBar/nav'
import Intro from './Components/plantilla-intro/Intro'
import FooterCDI from './Components/footer/footer'

function App() {
  return (
    <div className="App">
      <div className = "container">
        <Nav/>
        <div className = "container-body">
          <div className = "main-container-body">
          <Intro/>
            <div className = "container-grid">  
            </div>
          </div>
        <FooterCDI/>
        </div>
      </div>
    </div>
  );
}

export default App;
