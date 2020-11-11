import React from 'react'

export default function YelpTest(props) {
    if (!props.businesses) {
        return(<div></div>)
    } else {
        const searchResults = props.businesses.map(b => (<div key={b.id}>Test. name is: --{b.name}--</div>))
        return(
            <div>{searchResults}</div>
        ) 
    }
    
}