import Zoom from 'react-reveal/Zoom';
import React from 'react'

const DateType = (props) => {
    return(
        <div className="container">
            <Zoom top>
                <h1>What kind of date are you looking for?</h1>
                <div className="card" onClick={props.handleClick}>Romantic</div>     
                <div className="card" onClick={props.handleClick}>Adventurous</div>  
                <div className="card" onClick={props.handleClick}>Fun</div>  
                <div className="card" onClick={props.handleClick}>Chill</div>        
                <div className="card" onClick={props.handleClick}>Unique</div>   
                <div className="card" onClick={props.handleClick}>Cool / Hip</div>            
            </Zoom>
        </div>

    )

}

export default DateType