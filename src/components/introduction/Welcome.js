import Bounce from 'react-reveal/Bounce';
import React, { useState } from 'react'
import heartlogo from '../../assets/heartlogo.png'
import TestComponent from './TestComponent.js'

const Welcome = (props) => {
    const [adminMenu, setAdminMenu] = useState(false)

    const handleAdminClick = () => setAdminMenu(true)
    const handleBackClick = () => setAdminMenu(false)

    if (adminMenu) {
        return(
            <div className="welcome-container" >  
                <img src={heartlogo} alt="heart logo" className="heartlogo" />
                <Bounce top>
                    <TestComponent />
                </Bounce> 
                <button onClick={handleBackClick}>Back</button>
            </div>    
        )
    } else {
        return(
            <div className="welcome-container" >  
                <img src={heartlogo} alt="heart logo" className="heartlogo" />
                <Bounce top>
                    <h1 onClick={props.handleWelcomeClick}>Welcome</h1>
                </Bounce> 
                <button onClick={handleAdminClick}>Admin Menu</button>
            </div>    
        )
    }
    

}

export default Welcome