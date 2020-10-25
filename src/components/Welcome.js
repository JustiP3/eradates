import Bounce from 'react-reveal/Bounce';
import React from 'react'

const Welcome = (props) => {
    return(
        <div className="container" onClick={props.handleWelcomeClick}>             
            <Bounce top>
                <h1>Welcome </h1>
            </Bounce> 
        </div>

    )

}

export default Welcome