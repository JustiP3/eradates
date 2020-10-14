import React, { Component } from 'react'
import DateForm from '../components/DateForm'
import { CSSTransitionGroup } from 'react-transition-group'
import '../Test.css'

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
        this.handleAdd = () => {       
            this.setState({relationshipStatus: "Something"});
        }
        return(
            <div className="container">
            <p className="asdf">Something</p>     
            <DateForm onFormSubmit={this.handleSubmit} data={this.state} />   
            <button onClick={this.handleAdd}>Add Item</button>      
            <CSSTransitionGroup transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={300}>
                <h4>{this.state.relationshipStatus}</h4>
            </CSSTransitionGroup>
            </div>
        );
    };

}

export default Container 
