import React, { Component } from 'react'

export default class DateForm extends Component {

    state={
        relationshipStatus: "a",
        dateType: "b",
        budget: 0, 
        era: "c"
    }



      handleSubmit = (event) => {
        event.preventDefault() 
        info = {}
        this.props.onFormSubmit(info)                
      }

    render() {
        return(
        <div className="card align-items-center">
            <div className="card-title">
                <h1>Hello,</h1>
                <h1>Let's find you some date options.</h1>
            </div>  
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  
                  <label for="relationshipStatus">What is your situation?</label>
                    <select name="relationshipStatus" id="relationshipStatus">
                    <option value="firstDate">First Date</option>
                    <option value="dating">Dating for a While</option>
                    <option value="married">Married</option>
                    <option value="retired">Just Getting Back in the Game</option>
                    </select>

                    <label for="relationshipStatus">What is your situation?</label>
                    <select name="relationshipStatus" id="relationshipStatus">
                    <option value="firstDate">First Date</option>
                    <option value="dating">Dating for a While</option>
                    <option value="married">Married</option>
                    <option value="retired">Just Getting Back in the Game</option>
                    </select>

                  <button type='submit'>Search Date Ideas!</button>
                </div>
              </form>
            </div>            
        </div>
        )
    }

}

