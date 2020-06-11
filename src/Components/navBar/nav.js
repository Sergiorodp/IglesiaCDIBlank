import React, { createRef } from 'react'
import './StylesNav.css';
import Logo from './images/cdi.png'

function Nav() {

    const navPosition = createRef()
    var visible = false

    const buscador = ["Nosotros","Kids","Online","Donaciones","Fundación"]

    const colocar = buscador.map(content =>{
        return(
                <li key = {content} className ="nav-list-item">
                    <a href="/" className="nav-link">{content}</a>
                </li>
            )
    })

    const show = (e) =>{
        console.log(navPosition);
        visible = !visible
        if(visible){
            navPosition.current.className += " nav-active"
        }else{
            navPosition.current.className = "nav-list-container"
        }
    }

    return(
    <div className = "main-nav-container">
        <header className = "nav-container">
            <div className = "image-container">
            <div className = " image-grid-container">
                <img src = {Logo} alt = "web-logo" className="logo-class"></img>
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