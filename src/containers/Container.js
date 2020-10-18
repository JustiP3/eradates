import React, { Component } from 'react'
import '../Test.css'
import Welcome from '../components/Welcome'



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

  

  render() {
    

    if (this.state.stage === "welcome") {
        return (  <Welcome handleWelcomeClick={this.handleWelcomeClick} />)
    } else if (this.state.stage === "relationshipStatus") {
        return (
            <div className="container">
                <h1>relationshipstatus</h1>
            </div>
        )
    }
    
  };

}

export default Container 