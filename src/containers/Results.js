import React, {useState} from 'react'
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import {dateOptions} from '../components/results/DateOptions'
import DateOptionsList from '../components/results/DateOptionsList'
import YelpResultsList from '../components/results/YelpResultsList'

export default function Results(props) {
  const [dateSelected, setDateSelected] = useState("initialize");
  const select = (value) => {
    setDateSelected(value)
    setSearchParams({term: value, location: {latitude: props.latitude, longitude: props.longitude}}) // *** need to add parameters term,location
  }
  const back = () => setDateSelected("initialize")
 
  const optionsArray = dateOptions(props)
  const [businesses, setSearchParams] = useBusinessSearch(dateSelected, {latitude: props.latitude, longitude: props.longitude}); 
  

  if (dateSelected === "initialize"){    
    return (<DateOptionsList options={optionsArray} select={select} /> )
  } else {  //dateSelected == user Selection   
    return(<YelpResultsList businesses={businesses} dateSelected={dateSelected} back={back} />)
    }
 
}