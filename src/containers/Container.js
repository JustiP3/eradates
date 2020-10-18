import React, { Component } from 'react'
import '../Test.css'
import DateForm from '../components/DateForm'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';



class Container extends Component {

  state = {
      stage: "welcome",
      relationshipStatus: "a",
      dateType: "b",
      budget: 0, 
      era: "c"
  }

  

  handleSubmit = (info) => {
      this.setState(info)        
  }

  handleScroll = (event) => {
      event.preventDefault()
      this.setState({...this.state, stage: "relationshipStatus"})
  }

  

  render() {
    const handleWelcomeClick = (event) => {
        this.setState({...this.state, stage: "relationshipStatus"})
    }

    if (this.state.stage === "welcome") {
        return (
            <div className="container" onScroll={this.handleScroll} onClick={handleWelcomeClick}>             
                <Bounce top>
                    <h1>Welcome</h1>
                </Bounce> 
            </div>
        )
    } else if (this.state.stage === "relationshipStatus") {
        return (
            <div className="container">
                <h1>relationshipstatus</h1>
            </div>
        )
    }
    
      return(
            
            <div className="container">
             
             <DateForm onFormSubmit={this.handleSubmit} data={this.state} />   
           
             </div>
         
      );
  };

}

export default Container 