import React from 'react'

const AssociateForm = (props) => {

    const dateTypeOptions = props.allDates.map(x => <option value={x.name} key={x.id}>{x.name}</option>)

    return(
   
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
            <label>
                Date Type:
                <select name="date" onChange={props.handleInputChange}>
                    {dateTypeOptions}
                </select>
            </label>
                    <br />
                    <input type="submit" value="Submit" />
            </form>
        </div>        
 
    )
}

export default AssociateForm