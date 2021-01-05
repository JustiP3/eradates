import React, {useState} from 'react'
import heartlogo from '../assets/heartlogo.png'
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import {dateOptions} from '../components/results/DateOptions'
import DateOptionsList from '../components/results/DateOptionsList'
import YelpResult from '../components/results/YelpResult'

export default function Results(props) {
  const [dateSelected, setDateSelected] = useState("initialize");
  const select = (value) => {
    setDateSelected(value)
    nowLoading()
  }
  const back = () => setDateSelected("initialize")

  const [loading, setLoading] = useState(true)
  const nowLoading = () => setTimeout(notLoading, 2000) 
  const notLoading = () => setLoading(false) 

  const optionsArray = dateOptions(props) // props here represents user choices from introduction
  
  
  const locationParam = [props.latitude, props.longitude]
  const [businesses, searchParams, setSearchParams] = useBusinessSearch(dateSelected, locationParam);  

  // onclick - open link to "business" in new tab?
  const yelpResultList = businesses.map((x) => <YelpResult key={x.id} business={x} />)
  
  /*
  
  *** Need to Look up how to update use setSearchParams *** 
  When a date selection is made, update Yelp Search 
  */
  if (dateSelected === "initialize"){
    return (<DateOptionsList options={optionsArray} select={select} /> )
  } else {     

    if (!!loading) {
      return(
        <div className="container">
          
            <img src={heartlogo} alt="heart logo" className="heartlogo" /><br />
            <div className="card">
            <span><button className="button" onClick={()=>back()}>Back</button></span>
          
            <h1>...Loading...</h1>
          
            </div>
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