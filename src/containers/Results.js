import React, { Component } from 'react'
import YelpResultsList from '../components/results/YelpResultsList'
import DateOptionsList from '../components/results/DateOptionsList'

export default class Results extends Component { 

  state={
    dateSelected: "initialize",
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

  safeDates = () => {
    // returns an object 
    let dates 
    let obj = {}

    if (this.props.state.relationshipStatus === "Not Long") {
      dates = this.props.state.allDates.filter(x => x.safe === "true")      
    } else {
      dates = this.props.state.allDates
    }
    
    for (const x of dates) {
      obj[x.name] = "safe"
    }
    return obj
  }

  datesFilteredByEra = () => {
    const obj = this.safeDates()    
    return this.props.state.allEraDates.filter(x=> x.era === this.props.state.era && !!obj[x.type])
  }


render() {
  if (this.state.dateSelected === "initialize"){    
    return (<DateOptionsList options={this.datesFilteredByEra()} select={this.select} /> )
  } else {  //dateSelected == user Selection   
    return(<YelpResultsList businesses={this.businesses} dateSelected={this.state.dateSelected} back={this.back} />)
    }
}
  
 
}