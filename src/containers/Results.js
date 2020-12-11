import React, {useState} from 'react'
import heartlogo from '../assets/heartlogo.png'
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import {dateOptions} from '../components/results/DateOptions'
import DateIdea from '../components/results/DateIdea'
import YelpResult from '../components/results/YelpResult'

export default function Results(props) {
  const [dateSelected, setDateSelected] = useState("initialize");
  const select = (value) => setDateSelected(value)
  const back = () => setDateSelected("initialize")

  const optionsArray = dateOptions(props)
  const dateIdeaList = optionsArray.map((x) =><DateIdea key={x} name={x} select={select} />)
  
  const locationParam = [props.latitude, props.longitude]
  const [businesses, searchParams, setSearchParams] = useBusinessSearch(dateSelected, locationParam);  

  // onclick - open link to "business" in new tab?
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
        Location: {props.latitude}, {props.longitude}
      </div>

  </div>
    )
  } else { 
    let loading = true 
    let doneLoading = () => loading = false 

    setTimeout(doneLoading, 5000)

    if (!!loading) {
      return(
        <div className="container">
          
            <img src={heartlogo} alt="heart logo" className="heartlogo" />
          
            <h1>...</h1>
          
            
        </div>
    )
    } else {
       return(
      <div className="container">
        
          <img src={heartlogo} alt="heart logo" className="heartlogo" />
        
          <div className="date-idea-div">
            <h1>Results</h1>
            
            <span><button className="button" onClick={()=>back()}>Back</button></span>

            {/* onclick - open in new tab*/ }
            {yelpResultList}
          </div>

          
      </div>
  ) }
    }
 
}