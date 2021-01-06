import React, {useState} from 'react'
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import {dateOptions} from '../components/results/DateOptions'
import DateOptionsList from '../components/results/DateOptionsList'
import YelpResultsList from '../components/results/YelpResultsList'

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
  
  
  /*
  
  *** Need to Look up how to update use setSearchParams *** 
  When a date selection is made, update Yelp Search 
  */
  if (dateSelected === "initialize"){
    return (<DateOptionsList options={optionsArray} select={select} /> )
  } else {  //dateSelected == user Selection    
    return(<YelpResultsList businesses={businesses} loading={loading} back={back} />)
    }
 
}