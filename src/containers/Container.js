import React, { Component } from 'react'
import DateForm from '../components/DateForm'


class Container extends Component {

    state = {
        relationshipStatus: "a",
        dateType: "b",
        budget: 0, 
        era: "c"
    }

    handleSubmit = (info) => {
        this.setState(info)        
    }

    render() {
        return(
            <div className="container">
              <DateForm onFormSubmit={this.handleSubmit} data={this.state} />
            </div>
        );
    };

}

export default Container 
