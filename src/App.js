import React, { createRef } from 'react';
import './App.css';
import Nav from './Components/navBar/nav'
import FooterCDI from './Components/footer/footer'

import { BrowserRouter as Router, Route } from 'react-router-dom'

// pages
import MainPage from './pages/main/main'
import NosotrosPage from './pages/Nosotros/NosotrosPage'

// const homepage = "https://sergiorodp.github.io/IglesiaCDIBlank/"
const homepageLocal = "/IglesiaCDIBlank"

function App() {

  const container = createRef()

  return (
  <Router>
    <div className="App">
      <div className = "container" ref = {container}>
        <Nav referenceMain={container}/>
        <div className = "container-body">
          <div className = "main-container-body">
            <div id="top"></div>
            <Route exact path = {homepageLocal} component = {MainPage} />
            <Route exact path = {`${homepageLocal}/Nosotros`} component = {NosotrosPage}/>
          </div>
        <FooterCDI/>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
