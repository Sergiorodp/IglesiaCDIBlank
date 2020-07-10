import React, { createRef } from 'react';
import './App.css';
import Nav from './Components/navBar/nav'
import FooterCDI from './Components/footer/footer'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// pages
import MainPage from './pages/main/main'
import NosotrosPage from './pages/Nosotros/NosotrosPage'
import ContactCard from 'pages/Contact/Contacts';
import ParallTrans from 'pages/transforma/trans'
import NotFound from 'pages/notFound/notFound';


// import notFound from 'pages/notFound/notFound'

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
            <Route exact path = {homepageLocal} component = {MainPage} />
            
            <div className = "not-fullpage-container">
              <Switch>

                <Route path = {`${homepageLocal}/Nosotros`} component = {NosotrosPage}/>
                <Route path = {`${homepageLocal}/Contactos`} component = {ContactCard} />
                <Route path = {`${homepageLocal}/Transforma`} component = {ParallTrans}/>
                <Route path = {`${homepageLocal}/Kids`} component = {pruebaComp}></Route>
                {/* <Route component = {NotFound}/> */}

              </Switch>
            </div>
          </div>
        <FooterCDI/>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;

function pruebaComp(){
  return(
    <h1>niños</h1>
  )
}