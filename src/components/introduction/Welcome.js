import Bounce from 'react-reveal/Bounce';
import React from 'react'
import heartlogo from '../../assets/heartlogo.png'
import TestComponent from './TestComponent.js'

const Welcome = (props) => {

    return(
        <div className="welcome-container" >  
            <img src={heartlogo} alt="heart logo" className="heartlogo" />
            <Bounce top>
                <h1 onClick={props.handleWelcomeClick}>Welcome</h1>
            </Bounce> 
            <TestComponent />
        </div>

    )

}

export default Welcome