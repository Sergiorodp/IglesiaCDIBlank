import React from 'react'
import './StyleFooter/StyleFooter.css'
import Logo from './img/cdi.png'

function FooterCDI(){
    return(
        <div className = "footer">
            <div className = "grid-container-footer">
                <div className = "List-container-footer first-list-foot">
                    <p>Iglesia</p>
                    <ul className = "list-none">
                        <li><a href="/" className = "white-color">Comunidad</a></li>
                        <li><a href="/" className = "white-color">Donaciónes</a></li>
                        <li><a href="/" className = "white-color">Kids</a></li>
                    </ul>
                </div>
                <div className = "List-container-footer second-list-foot">
                    <p>Fundación</p>
                    <ul className = "list-none">
                        <li><a href="/" className = "white-color">Sobre</a></li>
                        <li><a href="/" className = "white-color">Donaciones</a></li>
                        <li><a href="/" className = "white-color">Contactanos</a></li>
                    </ul>
                </div>
                <div className = "List-container-footer thirt-list-foot">
                <ul className = "list-none">
                    <p>Más info</p>
                        <li><a href="/" className = "white-color">Servicios</a></li>
                        <li><a href="/" className = "white-color">Alabanza</a></li>
                        <li><a href="/" className = "white-color">Comunicaciones</a></li>
                    </ul>
                </div>
                <div className = "logo-footer-container">
                    <img src = {Logo} alt = "web-logo" className="logo-footer-class"></img>
                </div>
                <div className = "copy">
                    <p key = "copy-right">Copyright © {new Date().getFullYear()} Cruzada Cristiana Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    )
}

export default FooterCDI