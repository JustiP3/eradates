import React, {useState} from 'react'
import heartlogo from '../assets/heartlogo.png'
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import {dateOptions} from '../components/results/DateOptions'
import DateIdea from '../components/results/DateIdea'
import YelpResult from '../components/results/YelpResult'

export default function Results(props) {
  const [dateSelected, setDateSelected] = useState("initialize");
  const select = () => setDateSelected("something")
  const back = () => setDateSelected("initialize")

  const optionsArray = dateOptions(props)
  const dateIdeaList = optionsArray.map((x) => <DateIdea key={x} name={x} select={select}/>)
  
  const term = "Theatre"
  const locationParam = "Oakland"
  const [businesses, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);  
  const yelpResultList = businesses.map((x) => <YelpResult key={x.id} business={x} />)
  
  /*
  Goal:
  On Results page Load, Display Date Options and 
  Hide Yelp Results Until a Date Idea Selection is made 

  When a selection is made, display yelp results
  Add a back button to display add date ideas
  
  *** Need to Look up how to update use setSearchParams *** 
  When a date selection is made, update Yelp Search 
  */
  if (dateSelected === "initialize"){
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
  return(
      <div className="container">
        
          <img src={heartlogo} alt="heart logo" className="heartlogo" />
        
          <div className="date-idea-div">
            <h1>Results</h1>
            <button  className="button" onClick={back}>Go Back</button><br />
            <span>Search Params - {searchParams.term}, {searchParams.location}</span>
            {yelpResultList}
          </div>

          
      </div>
  ) }
}

