import Zoom from 'react-reveal/Zoom';
import React from 'react'


const RelationshipStatus = (props) => {
    return(
        <div className="container">
            <Zoom top>
                <h1>How long have you been dating?</h1>
                <div className="card" onClick={props.handleClick}>Not Long</div>     
                <div className="card" onClick={props.handleClick}>A While</div>        
            </Zoom>
        </div>
    )
}

export default RelationshipStatus


