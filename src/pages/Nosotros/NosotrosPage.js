import React  from 'react'
import Tittle from 'hooks/tittle'
import './Nosotros.css'

// hooks

//components
import CardNos from 'pages/Nosotros/cards/CardNos'
import CardHys from 'pages/Nosotros/cards/CardHistory'

function NosotrosPage(){

    Tittle({tittle : "Nosotros | CDI"})

    return(
        <div className = "body-main-page">
            <div className = "welcome-grid-container">
                <div className = "container-grid">
                    <CardNos/>
                    <CardHys/>
            </div>
        </div>
    </div>
    )

}

export default NosotrosPage