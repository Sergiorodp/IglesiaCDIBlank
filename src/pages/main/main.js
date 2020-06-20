import React from 'react'
import './main.css'

// Componentes
import Intro from 'Components/plantilla-intro/Intro'

//hooks
import tittle from 'hooks/tittle'



function MainPage(){


    tittle({tittle : "Iglesia CDI | Iglesia Cristiana"})


    return(
        <div className = "body-main-page main-page-pd">
            <div className = "welcome-grid-container">
            </div>
            <Intro/>
            <div className = "container-grid">
                <h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
                <h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1><h1>HOLA</h1>
            </div>
        </div>
    )
}

export default MainPage