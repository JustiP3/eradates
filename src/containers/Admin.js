import React, { Component } from 'react'
import DateTypeList from '../components/admin/DateTypesList'
import AddDateTypeForm from '../components/admin/AddDateTypeForm'


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
        
        event.preventDefault();
        console.log("submit clicked")
        console.log(this.state.dateName)
        console.log(this.state.era)
        console.log(this.state.safe)
        if (this.state.dateName !== "") {
            const datetypesRequestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ dateName: this.state.dateName, safe: this.state.safe})
            };
            const eradatesRequestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: this.state.dateName, era: this.state.era })
            }
            fetch('http://localhost:9000/api/datetypes', datetypesRequestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)                
            }).then(
                fetch(`/api/eras/${this.state.era}/${this.state.dateName}`, eradatesRequestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === 'success') {
                    this.fetchDateTypes();
                }
            }))
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
                    <div className='container'>
                         <AddDateTypeForm 
                            handleSubmit={this.handleSubmit} 
                            handleInputChange={this.handleInputChange}
                            handleShowAll={this.handleShowAll}
                            exitAdminMenu={this.exitAdminMenu} /> 
                    </div>               
                )
            } else {
                return(
                <div className='container'>
                    <DateTypeList back={this.handleHide} allDates={this.state.allDates} allErasDates={this.state.allErasDates}/>
                    <button onClick={this.props.exitAdminMenu}>Exit Admin Menu</button>
                </div>
                )
            }
            
        }
} 
    
    


   

