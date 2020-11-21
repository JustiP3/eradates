import React from 'react'


export default function YelpResult(props) {
      

    if (!props.business || props.business.length === 0) {
        return(<div>No Businesses Found</div>)
    } else {
        return(<div>{props.business.name}</div>) 
    }
    
}
