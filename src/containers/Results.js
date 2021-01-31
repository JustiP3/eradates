import React, {useState, useEffect} from 'react'
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import {dateOptions} from '../components/results/DateOptions'
import DateOptionsList from '../components/results/DateOptionsList'
import YelpResultsList from '../components/results/YelpResultsList'

export default function Results(props) {
  const [dateSelected, setDateSelected] = useState("initialize");
  const [allDates, setAllDates] = useState([]);
  const [allEraDates, setAllEraDates] = useState([]);

  useEffect(() => {
    fetchDateTypes()
  })
  const select = (value) => {
    setDateSelected(value)
    setSearchParams({term: value, location: {latitude: props.latitude, longitude: props.longitude}}) // *** need to add parameters term,location
  }
  const back = () => setDateSelected("initialize")
 
  const optionsArray = dateOptions(props)
  const [businesses, setSearchParams] = useBusinessSearch(dateSelected, {latitude: props.latitude, longitude: props.longitude}); 
  

  const fetchDateTypes = () => {
    return fetch('http://localhost:9000/api/datetypes').then(
        response => response.json()).then(
            data => {
                if (data.message === 'success') {
                    console.log(data)
                    setAllDates(data.data)                    
                } else {
                    console.log('error fetching datetypes')                    
                }                    
            })
            .then(fetchErasDates())
}

const fetchErasDates = () => {
    return fetch('http://localhost:9000/api/eras').then(
        response => response.json()).then(
            data => {
                if (data.message === 'success') {
                    console.log(data)
                    setAllEraDates(data.data)
                } else {
                    console.log('error fetching era date associations')
                }                    
            })
}

  if (dateSelected === "initialize"){    
    return (<DateOptionsList options={allDates} select={select} /> )
  } else {  //dateSelected == user Selection   
    return(<YelpResultsList businesses={businesses} dateSelected={dateSelected} back={back} />)
    }
 
}