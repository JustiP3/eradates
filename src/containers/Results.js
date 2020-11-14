import React from 'react'
import '../Test.css'
import heartlogo from '../assets/heartlogo.png'
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import YelpTest from '../components/YelpTest'

export default function Results(props) {
  //const params = new URLSearchParams(window.location.search)
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
          <YelpTest businesses={businesses} searchParams={searchParams} setSearchParams={setSearchParams}/>
      </div>
  )
}

