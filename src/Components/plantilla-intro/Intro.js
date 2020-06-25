import React, { createRef , useState} from 'react'
import './StyleIntro.css'

import { useEffect } from 'react'
import useNearScreen from 'hooks/nearScreen'
import {setBg} from 'Components/navBar/nav'

// services

import getVideos from 'services/youtube'


function Intro() {

    const externalRef = createRef()
    const isNear = useNearScreen({externalRef})
    const [Video, setVideo] = useState("") 
    // const iframeAPI = "https://www.googleapis.com/youtube/v3"

    useEffect(() => {
        setBg({visible : isNear.isNearScreen})
    }, [isNear.isNearScreen])

    useEffect(() =>{
        getVideos()
        .then((res) => {
            setVideo(res)
        })
    },[])

    function GetVideo({url}){
        if(url !== "A95lxItEi_8"){
            return(
            <div className = "video-youtube-container">
                <iframe title = "mainVideo" width="560" height="315" src={`https://www.youtube.com/embed/${url}`} 
                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                </iframe>
            </div>
            )
        }else{
            return(
                <a href={`https://www.youtube.com/watch?v=${url}`} target="_blank" rel="noopener noreferrer" >
                    <div className="container-barra">
                        <div className = "intersection" ref = {externalRef}>
                        </div>
                    </div>
                </a>
            )
        }
    }

    return(
        <GetVideo url = {Video}/>
    )
}

export default Intro