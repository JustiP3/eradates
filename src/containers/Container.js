import React, { Component } from 'react'
import '../Test.css'
import Welcome from '../components/Welcome'
import RelationshipStatus from '../components/RelationshipStatus'



class Container extends Component {

  state = {
      stage: "welcome",
      relationshipStatus: "a",
      dateType: "b",
      budget: 0, 
      era: "c"
  }

    handleWelcomeClick = (event) => {
        this.setState({...this.state, stage: "relationshipStatus"})
    }

    handleRelationshipStatusSubmit = (event) => {
        event.preventDefault() 
        debugger 
        this.setState({...this.state, stage: "dateType", relationshipStatus: event.target.innerText})
    }

  

  render() {
    

    if (this.state.stage === "welcome") {
        return (  <Welcome handleWelcomeClick={this.handleWelcomeClick} />)
    } else if (this.state.stage === "relationshipStatus") {
        return ( <RelationshipStatus handleClick={this.handleRelationshipStatusSubmit} /> )
    } else if (this.state.stage === "dateType") {
        return ( <h1>{this.state.relationshipStatus}</h1>)
    }
    
  };

}

export default Container 