import Zoom from 'react-reveal/Zoom';
import React from 'react'

const Budget = (props) => {
    return(
        <div className="container">
            <Zoom top>
                <h1>What is your Budget?</h1>
                <div className="card" onClick={props.handleClick}>Economic</div>     
                <div className="card" onClick={props.handleClick}>Moderate</div>  
                <div className="card" onClick={props.handleClick}>Upper Moderate</div>  
                <div className="card" onClick={props.handleClick}>No Limits</div>                        
            </Zoom>
        </div>

    )

}

export default Budget