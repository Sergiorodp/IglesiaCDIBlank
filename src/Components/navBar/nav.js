import React, { createRef } from 'react'
import './StylesNav.css';
import Logo from './images/cdi.png'

import { Link } from 'react-router-dom'


function Nav() {

    const navPosition = createRef()
    var visible = false

    const homepageLocal = "/IglesiaCDIBlank"

    const buscador = ["Nosotros","Kids","Online","Donaciones","Fundación","Cultos"]


    const show = () =>{
        visible = !visible
        if(visible){
            navPosition.current.className += " nav-active"
        }else{
            navPosition.current.className = "nav-list-container"
        }
    }

    // Colocar Items
    const colocar = buscador.map(content =>{
        return(
                <li key = {content} className ="nav-list-item">
                    <Link to={`${homepageLocal}/${content}`} className="nav-link">{content}</Link>
                </li>
            )
    })

    return(
    <div className = "main-nav-container">
        <header className = "nav-container">
            <div className = "image-container">
            <div className = " image-grid-container">
                <Link to = {homepageLocal}>
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
                    <div className = "line-two line-div"></div>
                    <div className = "line-tree line-div"></div>
                </div>
            </div>
    </header>
    </div>
    )
}

export default Nav