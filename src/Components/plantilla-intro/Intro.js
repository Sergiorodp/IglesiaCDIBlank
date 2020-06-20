import React, { createRef } from 'react'
import './StyleIntro.css'

import { useEffect } from 'react'
import useNearScreen from 'hooks/nearScreen'
import {setBg} from 'Components/navBar/nav'


function Intro() {

    const externalRef = createRef()
    const isNear = useNearScreen({externalRef})

    useEffect(() => {
        setBg({visible : isNear.isNearScreen})
    }, [isNear.isNearScreen])


    return(
        <a href="https://www.youtube.com/watch?v=D02ffyl7Rks&t=7s" target="_blank" rel="noopener noreferrer" >
            <div className="container-barra">
                <div className = "intersection" ref = {externalRef}>
                </div>
            </div>
        </a>
    )
}

export default Intro