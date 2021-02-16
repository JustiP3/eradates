import React, { Component } from 'react'
import YelpResultsList from '../components/results/YelpResultsList'
import DateOptionsList from '../components/results/DateOptionsList'

export default class Results extends Component { 

  state={
    dateSelected: "initialize"
  }

  select = (value) => {
    this.setState({...this.state, dateSelected: value})
  }
  back = () => this.setState({...this.state, dateSelected: "initialize"})

  businesses = () => {
    const lat=this.props.latitude
    const long = this.props.longitude
    const term = this.state.dateSelected

    if (term !== "initialize") {
      fetch(`http://localhost:9000/yelp?latitude=${lat}&longitude=${long}&term=${term}`)
      .then(response => {console.log(response); return response.json() })
    } 
    
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
  const bus = this.businesses();

  if (this.state.dateSelected === "initialize"){  
    return (<DateOptionsList options={this.datesFilteredByEra()} select={this.select} />  )
  } else {  //dateSelected == user Selection   
    return(<YelpResultsList businesses={bus} dateSelected={this.state.dateSelected} back={this.back} />)
    }
}
  
 
}
