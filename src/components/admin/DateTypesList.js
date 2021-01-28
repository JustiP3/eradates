import React from 'react'


const DateTypeList = (props) => {
    const allDatesList = props.allDates.map(x => <div className="card">{x.id} - {x.name} - safe - {x.safe}</div>)
    const allErasDatesList = props.allErasDates.map(x => <div className="card">{x.id} - {x.era} - {x.type}</div>)

    return (
    <div>
        {allDatesList} 
        {allErasDatesList}
        <button onClick={props.back}>Hide Dates</button>
    </div>
        )
}
/*


<div>${allDatesList}</div>
*/

export default DateTypeList