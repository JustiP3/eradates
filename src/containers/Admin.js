import React, { Component } from 'react'
import DateTypeList from '../components/admin/DateTypesList'


export default class Admin extends Component {
    state = {
        dateName: "",
        safe: "true",
        era: "1920s",
        viewAll: false,
        allDates: [],
        allErasDates: []
    }

    fetchDateTypes() {
        return fetch('http://localhost:9000/api/datetypes').then(
            response => response.json()).then(
                data => {
                    if (data.message === 'success') {
                        console.log(data)
                        this.setState({...this.state, allDates: data.data})
                        return data
                    } else {
                        console.log('error fetching datetypes')
                        return []
                    }                    
                })
    }

    fetchErasDates() {
        return fetch('http://localhost:9000/api/eras').then(
            response => response.json()).then(
                data => {
                    if (data.message === 'success') {
                        console.log(data)
                        this.setState({...this.state, allErasDates: data.data})
                    } else {
                        console.log('error fetching era date associations')
                    }                    
                })
    }

    componentDidMount() {
        this.fetchDateTypes().then(this.fetchErasDates())
    }

    handleShowAll = () => {
        this.setState({...this.state, viewAll: true}) 
        
    }

    handleHide = () => {
        this.setState({...this.state, viewAll: false})
    }
    handleInputChange = (event) => {
        const target = event.target
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    handleSubmit = (event) => {
        // need to associate date with era
        // 1. check if this date is in alldates
        // 2. if yes post /api/eras/:era/:type to associate this date with the era
        // 3. if no post /api/datetypes
        event.preventDefault();
        console.log("submit clicked")
        console.log(this.state.dateName)
        console.log(this.state.era)
        console.log(this.state.safe)
        if (this.state.dateName !== "") {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ dateName: this.state.dateName, safe: this.state.safe, era: this.state.era })
            };
            fetch('http://localhost:9000/api/datetypes', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 'success') {
                    this.fetchDateTypes();
                }
            });
        }
    }
/*
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
*/
        render() {

            if (this.state.viewAll === false) {
                return(
                <div> 
                    <h3>Add Date</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name="dateName" onChange={this.handleInputChange} />
                        </label>
                        <label>
                            Era:
                        <select name="era" onChange={this.handleInputChange}>
                            <option value="1920s">1920s</option>
                            <option value="1930s">1930s</option>
                            <option value="1940s">1940s</option>
                            <option value="1950s">1950s</option>
                            <option value="1960s">1960s</option>
                            <option value="1970s">1970s</option>
                            <option value="1980s">1980s</option>
                            <option value="1990s">1990s</option>
                            <option value="2000s">2000s</option>
                        </select>
                        </label>
                        <label>
                            Safe?:
                        <select name="safe" onChange={this.handleInputChange}>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                        </label>
                   
                    <input type="submit" value="Submit" />
                    </form>
                    <button onClick={this.handleShowAll}>Show All Dates</button>
                </div>
                )
            } else {
                return(<DateTypeList back={this.handleHide} allDates={this.state.allDates} allErasDates={this.state.allErasDates}/>)
            }
            
        }
} 
    
    


   

