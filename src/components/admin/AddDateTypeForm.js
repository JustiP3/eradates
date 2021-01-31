import React from 'react'

const AddDateTypeForm = (props) => {

    return(
    <div className='container'> 
        <div className="admin-card">
        <h3>Add Date</h3>
                    <form onSubmit={props.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name="dateName" onChange={props.handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Safe?:
                        <select name="safe" onChange={props.handleInputChange}>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>
                        </label>
                        <br />
                    <input type="submit" value="Submit" />
                    </form>
                    <br />
                    <button onClick={props.handleShowAll}>Show All Dates</button>
                    <br />
                    <button onClick={props.exitAdminMenu}>Exit Admin Menu</button>
        </div>
        <div className='admin-card'>
            <h3>Assocate Date with Era</h3>
            <form onSubmit={props.handleAssociateSubmit}>
            <label>
                            Era:
                        <select name="era" onChange={props.handleInputChange}>
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
                        <br />
            </form>
        </div>
                    
    </div>
    )
}

export default AddDateTypeForm