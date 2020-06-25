import React from 'react'
import './StyleFooter/StyleFooter.css'
import Logo from './img/cdi.png'
import Cruzada from './img/LOGO BEGRO.png'

const homepageLocal = "/IglesiaCDIBlank"


function FooterCDI(){
    return(
        <footer className = "footer">
            <div className = "grid-container-footer">
                <div className = "list-one-main-grid-container">
                    <div className = "List-container-footer first-list-foot">
                        <p>Iglesia</p>
                        <ul className = "list-none">
                            <li><a href={homepageLocal} className = "white-color">Comunidad</a></li>
                            <li><a href={homepageLocal} className = "white-color">Donaciónes</a></li>
                            <li><a href={homepageLocal} className = "white-color">Kids</a></li>
                        </ul>
                    </div>
                </div>
                <div className = "list-two-main-grid-container">
                    <div className = "List-container-footer second-list-foot">
                    <p>Fundación</p>
                    <ul className = "list-none">
                        <li><a href={homepageLocal} className = "white-color">Sobre</a></li>
                        <li><a href={homepageLocal} className = "white-color">Donaciones</a></li>
                        <li><a href={homepageLocal} className = "white-color">Contactanos</a></li>
                    </ul>
                </div>
                </div>
                <div className = "list-three-main-grid-container">
                    <div className = "List-container-footer thirt-list-foot">
                    <ul className = "list-none">
                        <p>Más info</p>
                            <li><a href={homepageLocal} className = "white-color">Servicios</a></li>
                            <li><a href={homepageLocal} className = "white-color">Alabanza</a></li>
                            <li><a href={homepageLocal} className = "white-color">Comunicaciones</a></li>
                        </ul>
                    </div>
                </div>
                <div className = "logo-footer-container">
                    <img src = {Logo} alt = "web-logo" className="logo-footer-class"></img>
                    <img src = {Cruzada} alt = "Logo-cruzada" className = "logo-footer-class-cruzada"></img>
                </div>
                <div className = "end-container">
                    <div className = "copy-container-footer">
                        <p key = "copy-right" className = "copy-text-footer">Copyright © {new Date().getFullYear()} Cruzada Cristiana. All rights reserved. </p>
                    </div>
                    <div className = "media-container-footer">
                        <a href = "https://twitter.com/CdiIglesia" target="_blank" rel="noopener noreferrer"><p><span className = "fab fa-twitter"></span> twitter </p></a>
                        <a href = "https://www.instagram.com/iglesiacdi/?hl=es-la" target="_blank" rel="noopener noreferrer"><p><span className = "fab fa-instagram"></span> instagram </p></a>
                        <a href = "https://www.facebook.com/icccdi/" target="_blank" rel="noopener noreferrer"><p><span className = "fab fa-facebook"></span> facebook </p></a>
                        <a href = "https://www.youtube.com/user/IglesiaCDI" target="_blank" rel="noopener noreferrer"><p><span className = "fab fa-youtube"></span> Youtube </p></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterCDI