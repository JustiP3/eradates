import React, { Component } from 'react'
import '../Test.css'
import heartlogo from '../assets/heartlogo.png'



class Results extends Component {

  fetchResults = () => {
    console.log("this will fetch results from yelp. api key is process.env.REACT_APP_YELP_KEY")
  }

  render() {    

    return(
        <div className="container">
            <img src={heartlogo} alt="heart logo" className="heartlogo" />
            <h1 onClick={this.fetchResults}>Your Choices:</h1>
            <p>Relationship Status: {this.props.state.relationshipStatus}</p>
            <p>Date Type: {this.props.state.dateType}</p>
            <p>Era: {this.props.state.era}</p>
            <p>Budget: {this.props.state.budget}</p>
        </div>
    )
    
  };

}

export default Results 
