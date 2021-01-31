import React from 'react'

const AddDateTypeForm = (props) => {    

    return(
    <div className="admin-card">
    <h3>Add Date</h3>
        <form onSubmit={props.handleSubmit}>
            <label>
                Name:
                <input type="text" name="dateName" onChange={props.handleInputChange} />
            </label>
            <br />
            <label>
                Safe?: <br />
            <select name="safe" onChange={props.handleInputChange}>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>
            </label>
            <br />
        <input type="submit" value="Submit" />
        </form>            
    </div>      
    )
}

export default AddDateTypeForm