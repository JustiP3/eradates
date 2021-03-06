import React, { Component } from 'react'
import DateTypeList from '../components/admin/DateTypesList'
import AddDateTypeForm from '../components/admin/AddDateTypeForm'
import AssociateForm from '../components/admin/AssociateForm'


export default class Admin extends Component {
    state = {
        dateName: "",
        safe: "true",
        era: "1920s",
        viewAll: false,
        addOrAssociate: 'add',
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
            ...this.state,
          [name]: value
        });
      }
    handleSubmit = (event) => {
        
        event.preventDefault();
        
        if (this.state.dateName !== "") {
            const datetypesRequestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ dateName: this.state.dateName, safe: this.state.safe})
            };
            
            fetch('http://localhost:9000/api/datetypes', datetypesRequestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)   
                if (data.status === 'success') {
                    this.fetchDateTypes();
                }             
            })              
        }
    }

    handleAssociateSubmit = (event) => {
        
        event.preventDefault();
        console.log(this.state.dateName)
        console.log(this.state.era)
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: this.state.dateName, era: this.state.era})
        };
        
        fetch(`http://localhost:9000/api/eras/${this.state.era}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.status === 'success') {
                this.fetchErasDates();
            }
        })
        
    }

    handleAdd = (event) => {
        event.preventDefault()
        this.setState({...this.state, addOrAssociate: 'add'})    
    }

    handleAssociateClick = (event) => {
        event.preventDefault()
        this.setState({
            ...this.state, 
            addOrAssociate: 'associate',
            dateName: this.state.allDates[0].name
        })    
        
    }

    handleSelectDateType = (event) => {
        const target = event.target
        const value = target.value;
        console.log(value)

        this.setState({
            ...this.state,
            dateName: value
        });
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
                if (this.state.addOrAssociate === 'add') { // add form 
                    return(
                        <div className='container'>
                            <div className='card'>                        
                                <button onClick={this.handleAdd}>Add Date</button>                               
                                <button onClick={this.handleAssociateClick}>Associate Date</button>
                            </div>
                            <div className='card'>
                                <AddDateTypeForm 
                                    handleSubmit={this.handleSubmit} 
                                    handleInputChange={this.handleInputChange}
                                    handleShowAll={this.handleShowAll}   /> 
                            </div>
                            <div className='card'>                        
                                <button onClick={this.handleShowAll}>Show All Dates</button>
                                <br />
                                <button onClick={this.props.exitAdminMenu}>Exit Admin Menu</button>
                            </div>
                                
                        </div>               
                    )
                } else { // associate form 
                    return(
                        
                        <div className='container'>
                            <div className='card'>                        
                                <button onClick={this.handleAdd}>Add Date</button>                               
                                <button onClick={this.handleAssociateClick}>Associate Date</button>
                            </div>
                            <div className='card'>
                                <AssociateForm 
                                    handleInputChange={this.handleInputChange}
                                    selectDateType={this.handleSelectDateType}
                                    handleAssociateSubmit={this.handleAssociateSubmit}
                                    allDates={this.state.allDates} />
                            </div>
                            <div className='card'>                        
                                <button onClick={this.handleShowAll}>Show All Dates</button>
                                <br />
                                <button onClick={this.props.exitAdminMenu}>Exit Admin Menu</button>
                            </div>
                                
                        </div>               
                    )
                }
                
            } else {
                return(
                <div className='container'>
                    <DateTypeList back={this.handleHide} 
                    allDates={this.state.allDates} 
                    allErasDates={this.state.allErasDates}/>
                    <button onClick={this.props.exitAdminMenu}>Exit Admin Menu</button>
                </div>
                )
            }
            
        }
} 
    
    


   

