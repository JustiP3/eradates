import Zoom from 'react-reveal/Zoom';
import React from 'react'

const Era = (props) => {
    return(
        <div className="container">
            <Zoom top>
                <h1>Which Era Do You Want to Relive?</h1>
                <div className="card" onClick={props.handleClick}>1920's</div>     
                <div className="card" onClick={props.handleClick}>1930's</div>  
                <div className="card" onClick={props.handleClick}>1940's</div>  
                <div className="card" onClick={props.handleClick}>1950's</div>   
                <div className="card" onClick={props.handleClick}>1960's</div>     
                <div className="card" onClick={props.handleClick}>1970's</div>     
                <div className="card" onClick={props.handleClick}>1980's</div> 
                <div className="card" onClick={props.handleClick}>1990's</div>
                <div className="card" onClick={props.handleClick}>2000's</div>                                  
            </Zoom>
        </div>

    )

}

export default Era