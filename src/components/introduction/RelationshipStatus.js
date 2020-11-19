import Zoom from 'react-reveal/Zoom';
import React from 'react'


const RelationshipStatus = (props) => {
    return(
        <div className="container">
            <Zoom top>
                <h1>How long have you been dating?</h1>
                <div className="card" onClick={props.handleClick}>First Date</div>     
                <div className="card" onClick={props.handleClick}>Dating for a While</div>  
                <div className="card" onClick={props.handleClick}>Basically (or actually) Married</div>  
                <div className="card" onClick={props.handleClick}>Just getting back in the Game</div>         
            </Zoom>
        </div>

    )

}

export default RelationshipStatus


