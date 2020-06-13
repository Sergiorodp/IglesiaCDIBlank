import React from 'react'
// import Welcome from './images/Bienvenidos@72x.png'
import './main.css'

// Componentes
import Intro from '../../Components/plantilla-intro/Intro'


function MainPage(){
    return(
        <div className = "body-main-page">
            {/* <h1 className = " InProgress ">En proceso...</h1> */}
            <div className = "welcome-grid-container">
                {/* <div className="Welcome-img-container">
                    <img src = {Welcome} alt = "welcome" className = "Welcome-image"></img>
                </div> */}
            </div>
            <Intro/>
            <div className = "container-grid">
                {/* <div className = "icons-container"></div> */}
            </div>
        </div>
    )
}

export default MainPage