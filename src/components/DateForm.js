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
        let info = {}
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
                  
                  <label for="relationshipStatus">Relationship Status</label><br />
                    <select name="relationshipStatus">
                    <option value="firstDate">First Date</option>
                    <option value="dating">Dating for a While</option>
                    <option value="married">Married</option>
                    <option value="retired">Just Getting Back in the Game</option>
                    </select>
                    <br /><br />
                    <label for="familiarity">Do you know the area?</label><br />
                    <select name="familiarity" id="familiarity">
                    <option value="new">Haven't explored past your living room couch</option>
                    <option value="experienced">Been here awhile, know all the common spots</option>
                    </select>
                    <br /> <br /> 
                  <button type='submit'>Search!</button>
                </div>
              </form>
            </div>            
        </div>
        )
    }

}

