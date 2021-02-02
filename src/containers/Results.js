import React, { Component } from 'react'
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import {dateOptions} from '../components/results/DateOptions'
import YelpResultsList from '../components/results/YelpResultsList'

export default class Results extends Component {
 

  state={
    dateSelected: "initialize",
    allDates: [],
    allEraDates: []
  }

  componentDidMount() {
    this.fetchDateTypes()
  }

  
  select = (value) => {
    this.setState({...this.state, dateSelected: value})
    // setSearchParams({term: value, location: {latitude: props.latitude, longitude: props.longitude}}) // *** need to add parameters term,location
  }
  back = () => this.setState({...this.state, dateSelected: "initialize"})
 
  //optionsArray = dateOptions(props)
  //const [businesses, setSearchParams] = useBusinessSearch(dateSelected, {latitude: props.latitude, longitude: props.longitude}); 
  // remove all of this, to be replaced by API request

  businesses = () => {
    // send api request 
    return [
      {name: "test", rating: "5"}
    ]
  }

  fetchDateTypes = () => {
    return fetch('http://localhost:9000/api/datetypes').then(
        response => response.json()).then(
            data => {
                if (data.message === 'success') {
                    console.log(data)
                    this.setState({...this.state, allDates: data.data})                    
                } else {
                    console.log('error fetching datetypes')                    
                }                    
            })
            .then(this.fetchErasDates())
}

fetchErasDates = () => {
    return fetch('http://localhost:9000/api/eras').then(
        response => response.json()).then(
            data => {
                if (data.message === 'success') {
                    console.log(data)
                    this.setState({...this.state, allEraDates: data.data}) 
                } else {
                    console.log('error fetching era date associations')
                }                    
            })
}

render() {
  if (dateSelected === "initialize"){    
    return (<DateOptionsList options={this.state.allDates} select={this.select} /> )
  } else {  //dateSelected == user Selection   
    return(<YelpResultsList businesses={businesses} dateSelected={this.state.dateSelected} back={this.back} />)
    }
}
  
 
}