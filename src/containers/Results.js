import React, { Component } from 'react'
import YelpResultsList from '../components/results/YelpResultsList'
import DateOptionsList from '../components/results/DateOptionsList'

export default class Results extends Component { 

  state={
    dateSelected: "initialize",
    businesses: [{name: "test", rating: "5", id: 123}]
  }

  select = (value) => {
    this.setState({...this.state, dateSelected: value})
    this.businesses(value)
  }
  back = () => this.setState({...this.state, dateSelected: "initialize"})

  businesses = (dateSelected="initialize") => {
    const lat=this.props.latitude
    const long = this.props.longitude
    const term = dateSelected

    if (term !== "initialize") {
      fetch(`http://localhost:9000/yelp?latitude=${lat}&longitude=${long}&term=${term}`)
      .then(response => response.json() )
      .then(x => this.setState({...this.state, businesses: x.data}))
    } 
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
    return (<DateOptionsList options={this.datesFilteredByEra()} select={this.select} />  )
  } else {  
    //dateSelected == user Selection   
   
    return(<YelpResultsList businesses={this.state.businesses} dateSelected={this.state.dateSelected} back={this.back} />)
    }
}
  
 
}
