import React, { createRef } from 'react'
import './StylesNav.css';
import Logo from './images/cdi.png'

import { Link } from 'react-router-dom'


function Nav({referenceMain}) {

    const navPosition = createRef()
    const makeFixed = createRef()

    var visible = false
    const homepageLocal = "/IglesiaCDIBlank"
    const buscador = ["Nosotros","Kids","Online","Donaciones","Fundación","Cultos"]

    const show = () =>{
        visible = !visible
        if(visible){
            navPosition.current.className += " nav-active"
            document.getElementById("body-main").classList.add("body-active")
        }else{
            navPosition.current.className = "nav-list-container"
            document.getElementById("body-main").classList.remove("body-active")
        }
    }
    const mainVisivle = () =>{
        if(visible){
            navPosition.current.className = " nav-list-container"
            visible = !visible
            referenceMain.current.className = " container"
            document.getElementById("body-main").classList.remove("body-active")
        }
        window.scrollTo(0,0)
    }

    const scrollTop = () => {
        window.scrollTo(0,0)
    }

    // Colocar Items
    const colocar = buscador.map(content =>{
        return(
                <li key = {content} className ="nav-list-item" onClick = {show}>
                        <Link to={`${homepageLocal}/${content}`} className="nav-link" onClick = {scrollTop}>
                            {content}
                        </Link>
                </li>
            )
    })

    return(
    <div className = "main-nav-container" ref = {makeFixed}>
        <header className = "nav-container">
            <div className = "image-container">
            <div className = " image-grid-container">
                <Link to = {homepageLocal} onClick = {mainVisivle}>
                    
                        <img src = {Logo} alt = "web-logo" className="logo-class"></img>
                    
                </Link>
            </div>
            </div>
            <nav className = "nav-list-container" ref = {navPosition}>
                <ul className = "bg-mine">
                    {colocar}
                </ul>
            </nav>
            <div className = "logo-search">
                <i className = "fas fa-search logo-search-item"></i>
            </div>
            <div className = "lines-nav-container">
                <div className = "lines-block" onClick = {show}>
                    <div className = "line-one line-div"></div>
                    <div className = "line-two line-div" ></div>
                    <div className = "line-tree line-div" ></div>
                </div>
            </div>
    </header>
    </div>
    )
}

export default Nav