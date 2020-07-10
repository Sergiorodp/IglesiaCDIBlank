import React, { createRef } from 'react'
import './StylesNav.css';
import Logo from './images/cdi.png'
import LogoB from './images/cdiB.png'

import { Link } from 'react-router-dom'

const navPosition = createRef()
const makeFixed = createRef()
const navList = createRef()
const blackLogo = createRef()
const whiteLogo = createRef()
const navContainer = createRef()
const LinkList = createRef()
const logoSearch = createRef()
const lineUp = createRef()
const LineDown = createRef()


export function setBg({visible = false}){
    if(visible){
        blackLogo.current.className = "logo-class dp-none"
        whiteLogo.current.className = "logo-class"
        makeFixed.current.classList.remove("bg-nav")
        navContainer.current.classList.remove("color-nav-container")
        navContainer.current.classList.add("color-nav-containerB")
        LinkList.current.classList.add("bg-mine-white")
        logoSearch.current.classList.add("logo-search-bgw")
        logoSearch.current.classList.remove("logo-search-bgb")
    }else{
        blackLogo.current.className = "logo-class"
        whiteLogo.current.className = "logo-class dp-none"
        makeFixed.current.classList.add("bg-nav")
        navContainer.current.classList.add("color-nav-container")
        navContainer.current.classList.remove("color-nav-containerB")
        LinkList.current.classList.remove("bg-mine-white")
        logoSearch.current.classList.add("logo-search-bgb")
        logoSearch.current.classList.remove("logo-search-bgw")
    } 
}

export function outMain(){
    blackLogo.current.className = "logo-class"
    whiteLogo.current.className = "logo-class dp-none"
    makeFixed.current.classList.add("bg-nav")
    navContainer.current.classList.add("color-nav-container")
    LinkList.current.classList.remove("bg-mine-white")
    logoSearch.current.classList.add("logo-search-bgb")
    logoSearch.current.classList.remove("logo-search-bgw")
}


function Nav({referenceMain, bgc}) {


    var visible = false
    const homepageLocal = "/IglesiaCDIBlank"
    const buscador = ["Nosotros","Kids","Online","Donaciones","Fundación","Cultos","Pastores","Transforma"]

    const show = () =>{
        visible = !visible
        if(visible){
            navList.current.scrollTo(0,0)
            outMain()
            navPosition.current.className += " nav-active"
            document.getElementById("body-main").classList.add("body-active")
            lineUp.current.classList.add("moverLeft")
            LineDown.current.classList.add("moverRight")
        }else{
            navPosition.current.className = "nav-list-container"
            document.getElementById("body-main").classList.remove("body-active")
            lineUp.current.classList.remove("moverLeft")
            LineDown.current.classList.remove("moverRight")
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
    <div className = "main-nav-container bg-nav" ref = {makeFixed}>
        <header className = "nav-container" ref = {navContainer}>
            <div className = "image-container">
            <div className = " image-grid-container">
                <Link to = {homepageLocal} onClick = {mainVisivle}>
                    
                        <img src = {Logo} alt = "logo-web-negro" className = "logo-class" ref = {blackLogo}></img>
                        <img src = {LogoB} alt = "web-logo-blanco" className="logo-class dp-none" ref = {whiteLogo}></img>
                    
                </Link>
            </div>
            </div>
            <nav className = "nav-list-container" ref = {navPosition}>
                <div className = "bg-mine-container" ref = {navList}>
                        <ul className = "bg-mine" ref = {LinkList}>
                            <li className = "li-btn-contact">
                                <div className = "btn-contac-container">
                                    <Link to = {`${homepageLocal}/Contactos`} className = "link-btn-mine" onClick = {show}>
                                        <div className = "btn-mine">
                                            <p>Contactanos</p>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                            {colocar}
                        </ul>
                    </div>
                {/* <div className = "bottom-nav-movil"></div> */}
            </nav>
            <div className = "logo-search">
                <i className = "fas fa-search logo-search-item logo-search-bgb" ref = {logoSearch}></i>
            </div>
            <div className = "lines-nav-container">
                <div className = "lines-block" onClick = {show}>
                    <div className = "line-one line-div " ref = {lineUp} ></div>
                    <div className = "line-two line-div" ></div>
                    <div className = "line-tree line-div " ref={LineDown} ></div>
                </div>
            </div>
    </header>
    </div>
    )
}

export default Nav