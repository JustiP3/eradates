import Bounce from 'react-reveal/Bounce';
import React from 'react'
import heartlogo from '../assets/heartlogo.png'
import '../Test.css'

const Welcome = (props) => {
    return(
        <div className="container" onClick={props.handleWelcomeClick}>  
            <img src={heartlogo} alt="heart logo" className="heartlogo" />
            <Bounce top>
                <h1>Welcome </h1>
            </Bounce> 
        </div>

    )

}

export default Welcome