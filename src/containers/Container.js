import React, { Component } from 'react'
import '../Test.css'
import Welcome from '../components/Welcome'
import RelationshipStatus from '../components/RelationshipStatus'
import DateType from '../components/DateType'
import Era from '../components/Era'
import Budget from '../components/Budget'
import Results from '../containers/Results'



class Container extends Component {

  state = {
      stage: "welcome",
      relationshipStatus: "",
      dateType: "",
      budget: 0, 
      era: ""
  }

    handleWelcomeClick = (event) => {
        this.setState({...this.state, stage: "relationshipStatus"})
    }

    handleRelationshipStatusSubmit = (event) => { 
        this.setState({...this.state, stage: "dateType", relationshipStatus: event.target.innerText})
    }

    handleDateTypeSubmit = (event) => {
        this.setState({...this.state, stage: "era", dateType: event.target.innerText})
    }

    handleEraSubmit = (event) => {
        this.setState({...this.state, stage: "budget", era: event.target.innerText})
    }

    handleBudgetSubmit = (event) => {
        this.setState({...this.state, stage: "results", budget: event.target.innerText})
    }

  

  render() {    

    if (this.state.stage === "welcome") {
        return (<Results state={this.state} />)
        //return (  <Welcome handleWelcomeClick={this.handleWelcomeClick} />)
    } else if (this.state.stage === "relationshipStatus") {
        return ( <RelationshipStatus handleClick={this.handleRelationshipStatusSubmit} /> )
    } else if (this.state.stage === "dateType") {
        return ( <DateType handleClick={this.handleDateTypeSubmit} /> )
    } else if (this.state.stage === "era") {
        return ( <Era handleClick={this.handleEraSubmit} /> )
    } else if (this.state.stage === "budget") {
        return ( <Budget handleClick={this.handleBudgetSubmit} /> )
    } else if (this.state.stage === "results") {
        return ( <Results state={this.state} /> )
    }
    
  };

}

export default Container 