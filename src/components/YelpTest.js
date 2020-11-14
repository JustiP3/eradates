import React from 'react'


export default function YelpTest(props) {
      

    if (!props.businesses || props.businesses.length === 0) {
        return(<div>asdf</div>)
    } else {
        const searchResults = props.businesses.slice(0,10).map(b => (<div key={b.id}>Name: --{b.name}--</div>))
        return(
        <div>{searchResults}</div>
        ) 
    }
    
}
