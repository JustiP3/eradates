import React, {useState} from 'react'

import DateIdea from './DateIdea'
import heartlogo from '../../assets/heartlogo.png'

export default function DateOptionsList(props) {
    const dateIdeaList = props.optionsArray.map((x) =><DateIdea key={x} name={x} select={props.select} />)

    return (
        <div className="container">
        
        <img src={heartlogo} alt="heart logo" className="heartlogo" />
        <div className="date-idea-div">
          <h1>Date Ideas</h1>        
          {dateIdeaList}
          Location: {props.latitude}, {props.longitude}
        </div>
  
    </div>
    )

} 

