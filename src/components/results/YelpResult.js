import React from 'react'


export default function YelpResult(props) {
      

    if (!props.business || props.business.length === 0) {
        return(<div className="yelp-results-card">No Businesses Found</div>)
    } else {
        let stars
       
        switch (Math.trunc(props.business.rating)) {
            case 1:
                stars = "☆"
                break;
            case 2:
                stars = "☆☆"
                break;
            case 3:
                stars = "☆☆☆"
                break;
            case 4: 
                stars = "☆☆☆☆"
                break;
            case 5:
                stars = "☆☆☆☆☆"
                break;
            default:
                stars = "No Rating"
        }
        return(
            <div className="yelp-results-card">
            {props.business.name} <br />
            Rating: {stars}
            </div>
            )
    }
    
}
