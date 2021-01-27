import React, { Component } from 'react'


export default class TestComponent extends Component {
    state = {
        dateName: "",
        safe: "false",
        era: "",
        viewAll: false,
        allDates: []
    }

    componentDidMount() {
        fetch('http://localhost:9000/api/datetypes').then(
            response => response.json()).then(
                data => {
                    if (data.message === 'success') {
                        this.setState({...this.state, allDates: data.data})
                    } else {
                        console.log('error fetching datetypes')
                    }
                    
                }
            )
        
    }

    handleShowAll = () => {
        console.log(this.state.allDates)
        this.setState({...this.state, viewAll: true}) 
        
    }

    handleHide = () => {
        this.setState({...this.state, viewAll: false})
    }

    testRequest = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dateName: 'rollerskate', safe: 'true' })
        };
        fetch('http://localhost:9000/api/datetypes', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        }


        render() {

            if (this.state.viewAll === false) {
                return(<div> <button onClick={this.handleShowAll}>Show All Dates</button></div>)
            } else {
                const allDatesList = this.state.allDates.map(x => <p>{x.id} - {x.name} - safe? {x.safe}</p>)
                return(<div>${allDatesList}<button onClick={this.handleHide}>Hide Dates</button></div>)
            }
            
        }
} 
    
    


   

