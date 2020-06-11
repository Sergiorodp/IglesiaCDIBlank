import React from 'react'
import './StylesNav.css';
import Logo from './images/cdi.png'

function Nav() {

    const buscador = ["Nosotros","Kids","Online","Donaciones","Fundación"]

    const colocar = buscador.map(content =>{
        return(
                <li key = {content} className ="nav-list-item">
                    <a href="/" className="nav-link">{content}</a>
                </li>
            )
    })

    return(
    <div className = "main-nav-container">
        <header className = "nav-container">
        <div className = "image-container">
            <div className = " image-grid-container">
                <img src = {Logo} alt = "web-logo" className="logo-class"></img>
            </div>
        </div>
        <nav className = "nav-list-container">
            <ul className = "bg-mine">
                {colocar}
            </ul>
        </nav>
        <div className = "logo-search">
            <i className = "fas fa-search logo-search-item"></i>
        </div>
    </header>
    </div>
    )
}

export default Nav