import React, { useRef } from 'react'
import {useChain, animated, useSpring, useTransition} from 'react-spring'
// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

// styles
import './stylestrans.css'
// import FooterCDI from 'Components/footer/footer'

// components


function ParallTrans(){
    const values = [0,2]
    const springRef = useRef()
    const props = useSpring({...values, ref: springRef})
    // Build a transition and catch its ref
    const transitionRef = useRef()
    const transitions = useTransition({...values, ref: transitionRef})
    // First run the spring, when it concludes run the transition
    useChain([springRef, transitionRef])
    // Use the animated props like always

    return(
        <div className = "parallax-container">
            {/* <animated.div style={props}>
                {transitions.map(({item, key, props}) => (
                    <animated.div key={key} style={props} />
                ))}
            </animated.div> */}
        </div>
    )
}

export default ParallTrans