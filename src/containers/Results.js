import React, { Component } from 'react'
import '../Test.css'



class Results extends Component {

  

  render() {    

    return(
        <div className="container">
            <h1>Your Choices:</h1>
            <p>Relationship Status: {this.props.state.relationshipStatus}</p>
            <p>Date Type: {this.props.state.dateType}</p>
            <p>Era: {this.props.state.era}</p>
            <p>Budget: {this.props.state.budget}</p>
        </div>
    )
    
  };

}

export default Results 
