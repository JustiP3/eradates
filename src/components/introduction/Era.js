import Zoom from 'react-reveal/Zoom';
import React from 'react'

const Era = (props) => {
    return(
        <div className="container">
            <Zoom top>
                <h1>Which Era Do You Want to Relive?</h1>
                <div className="card" onClick={props.handleClick}>1920s</div>     
                <div className="card" onClick={props.handleClick}>1930s</div>  
                <div className="card" onClick={props.handleClick}>1940s</div>  
                <div className="card" onClick={props.handleClick}>1950s</div>   
                <div className="card" onClick={props.handleClick}>1960s</div>     
                <div className="card" onClick={props.handleClick}>1970s</div>     
                <div className="card" onClick={props.handleClick}>1980s</div> 
                <div className="card" onClick={props.handleClick}>1990s</div>
                <div className="card" onClick={props.handleClick}>2000s</div>                                  
            </Zoom>
        </div>

    )

}

export default Era