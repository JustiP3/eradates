import React, {useState} from 'react'
import heartlogo from '../assets/heartlogo.png'
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import {dateOptions} from '../components/results/DateOptions'
import DateIdea from '../components/results/DateIdea'
import YelpResult from '../components/results/YelpResult'

export default function Results(props) {
  const [dateSelected, setDateSelected] = useState("initialize");
  const select = (value) => setDateSelected(value)
  //const back = () => setDateSelected("initialize")

  const optionsArray = dateOptions(props)
  const dateIdeaList = optionsArray.map((x) =><DateIdea key={x} name={x} select={select}/>)
  
  const term = "Theatre"
  const locationParam = "Oakland"
  const [businesses, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);  
  const yelpResultList = businesses.map((x) => <YelpResult key={x.id} business={x} />)
  
  /*
  
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
    // <button  className="button" onClick={back}>Go Back</button><br />
  return(
      <div className="container">
        
          <img src={heartlogo} alt="heart logo" className="heartlogo" />
        
          <div className="date-idea-div">
            <h1>Results</h1>
            
            <span>Search Params - {searchParams.term}, {searchParams.location}. Selection: {dateSelected}</span>

            {yelpResultList}
          </div>

          
      </div>
  ) }
}


/*
index.js:1 Warning: Cannot update a component (`Results`) while rendering a different component (`DateIdea`). To locate the bad setState() call inside `DateIdea`, follow the stack trace as described in https://fb.me/setstate-in-render
    in DateIdea (at Results.js:14)
    in div (at Results.js:31)
    in div (at Results.js:28)
    in Results (at Container.js:58)
    in Container (at App.js:7)
    in App (at src/index.js:8)
    in StrictMode (at src/index.js:7)
    */