import React, { Component } from 'react'
import Welcome from '../components/introduction/Welcome'
import RelationshipStatus from '../components/introduction/RelationshipStatus'
//import DateType from '../components/introduction/DateType'
import Era from '../components/introduction/Era'
import Results from '../containers/Results'
import '../components/introduction/introduction.css'
import { geolocated } from "react-geolocated";
import Location from '../components/results/Location'


class Container extends Component {

  state = {
      stage: "welcome",
      relationshipStatus: "",
      dateType: "",
      budget: 0, 
      era: "",
      lattitude: 0,
      longitude: 0
  }

  componentDidMount() {
    
    if (!this.props.isGeolocationAvailable) {
        console.log("GeoLocation is not enabled")
    } else {
        if (!!this.props.coords) {
            this.setState({...this.state, 
                lattitude: this.props.coords.latitude, 
                longitude: this.props.coords.longitude
            })
        } else {
            console.log("GeoLocation is enabled but we don't have coords :(")
        }

    }
  
  }

    handleWelcomeClick = (event) => {
        this.setState({...this.state, stage: "relationshipStatus"})
    }

    handleRelationshipStatusSubmit = (event) => { 
        this.setState({...this.state, stage: "era", relationshipStatus: event.target.innerText})
    }


    handleEraSubmit = (event) => {
        this.setState({...this.state, stage: "results", era: event.target.innerText})
    }


  render() {    

    if (this.state.stage === "welcome") {
        return (  <div>
            <Welcome handleWelcomeClick={this.handleWelcomeClick} />
            <Location />
            Location set from componentdidmount in container class component: {this.state.latitude}, {this.state.longitude}
            </div>)
    } else if (this.state.stage === "relationshipStatus") {
        return ( <RelationshipStatus handleClick={this.handleRelationshipStatusSubmit} /> )
    } /*else if (this.state.stage === "dateType") {
        return ( <DateType handleClick={this.handleDateTypeSubmit} /> )
    } */else if (this.state.stage === "era") {
        return ( <Era handleClick={this.handleEraSubmit} /> )
    }/* else if (this.state.stage === "budget") {
        return ( <Budget handleClick={this.handleBudgetSubmit} /> )
    } */ else if (this.state.stage === "results") {
        return ( <Results state={this.state} /> )
    }
    
  };

}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Container);