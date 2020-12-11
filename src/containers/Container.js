import React, { Component } from 'react'
import Welcome from '../components/introduction/Welcome'
import RelationshipStatus from '../components/introduction/RelationshipStatus'
import Era from '../components/introduction/Era'
import Results from '../containers/Results'
import '../stylesheets/style.css'
import { geolocated } from "react-geolocated";


class Container extends Component {

  state = {
      stage: "welcome",
      relationshipStatus: "",
      dateType: "",
      budget: 0, 
      era: "",
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
      let latt 
      let long 
      
    if (!this.props.isGeolocationAvailable) {
        console.log("GeoLocation is not enabled")
    } else {
        if (!!this.props.coords) {
            
                latt = this.props.coords.latitude
                long = this.props.coords.longitude
           
        } else {
            console.log("GeoLocation is enabled but we don't have coords :(")
        }

    }

    if (this.state.stage === "welcome") {
        return ( <Welcome handleWelcomeClick={this.handleWelcomeClick} />)
    } else if (this.state.stage === "relationshipStatus") {
        return ( <RelationshipStatus handleClick={this.handleRelationshipStatusSubmit} /> )
    } /*else if (this.state.stage === "dateType") {
        return ( <DateType handleClick={this.handleDateTypeSubmit} /> )
    } */else if (this.state.stage === "era") {
        return ( <Era handleClick={this.handleEraSubmit} /> )
    }/* else if (this.state.stage === "budget") {
        return ( <Budget handleClick={this.handleBudgetSubmit} /> )
    } */ else if (this.state.stage === "results") {
        return ( <Results state={this.state} latitude={latt} longitude={long} /> )
    }
    
  };

}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Container);