import React from 'react'


export default function YelpTest(props) {
      

    if (!props.businesses || props.businesses.length === 0) {
        return(<div>No Businesses Found</div>)
    } else {
        const searchResults = props.businesses.slice(0,10).map(b => (<div key={Math.random() * 1000}>Name: --{b}--</div>))
        return(
        <div>{searchResults}</div>
        ) 
    }
    
}
