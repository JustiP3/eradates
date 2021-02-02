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

  datesFilteredBySafe = () => {
    if (this.props.state.relationshipStatus === "Not Long") {
      return this.props.state.allDates.filter(x => x.safe === "true")
    } else {
      return this.props.state.allDates
    }
  }


render() {
  if (this.state.dateSelected === "initialize"){    
    return (<DateOptionsList options={this.datesFilteredBySafe()} select={this.select} /> )
  } else {  //dateSelected == user Selection   
    return(<YelpResultsList businesses={this.businesses} dateSelected={this.state.dateSelected} back={this.back} />)
    }
}
  
 
}