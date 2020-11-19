import React from 'react'
import heartlogo from '../assets/heartlogo.png'
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import YelpTest from '../components/YelpTest'
import {dateOptions} from '../components/results/DateOptions'

export default function Results(props) {
  const optionsArray = dateOptions(props)
  const term = "Dinner"
  const locationParam = "Oakland"
  const [businesses, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);  
  return(
      <div className="container">
        
          <img src={heartlogo} alt="heart logo" className="heartlogo" />
          <h1>Your Choices:</h1>
          <p>Relationship Status: {props.state.relationshipStatus}</p>
          <p>Date Type: {props.state.dateType}</p>
          <p>Era: {props.state.era}</p>
          <p>Budget: {props.state.budget}</p>
          <p>Date Options function result --{optionsArray[0]}</p>
          <YelpTest businesses={businesses} searchParams={searchParams} setSearchParams={setSearchParams}/>
          
      </div>
  )
}

