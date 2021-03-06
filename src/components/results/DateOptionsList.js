import React from 'react'

import DateIdea from './DateIdea'
import heartlogo from '../../assets/heartlogo.png'

export default function DateOptionsList(props) {
    
  
  if (!!props.options) {
    const dateIdeaList = props.options.map((x) => <DateIdea key={x.id} name={x.type} select={props.select} />)
    
    return (
      <div className="container">
      
      <img src={heartlogo} alt="heart logo" className="heartlogo" />
      <div className="date-idea-div">
        <h1>Date Ideas</h1>        
        {dateIdeaList}
      </div>
    </div>
    )
  } else {
    return (
      <div className="container">
      
      <img src={heartlogo} alt="heart logo" className="heartlogo" />
      <div className="date-idea-div">
        <h1>Date Ideas</h1>        
        <p>No Date Ideas</p>
      </div>
    </div>
    )
  }
      
    
    
   
    

} 

