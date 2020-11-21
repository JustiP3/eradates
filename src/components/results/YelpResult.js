import React from 'react'


export default function YelpResult(props) {
      

    if (!props.business || props.business.length === 0) {
        return(<div className="yelp-results-card">No Businesses Found</div>)
    } else {
        return(<div className="yelp-results-card">{props.business.name}</div>) 
    }
    
}
