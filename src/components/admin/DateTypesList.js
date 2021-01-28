import React from 'react'


const DateTypeList = (props) => {
    const allDatesList = props.allDates.map(x => <div className="card">{x.id} - {x.name} - safe - {x.safe}</div>)
    const allErasDatesList = props.allErasDates.map(x => <div className="card">{x.id} - {x.era} - {x.type}</div>)

    return (
    <div>
        <div className='container'><h2>All Date Types</h2>{allDatesList}</div>
        <div className='container'><h2>All Eras and Associated Dates</h2>{allErasDatesList}</div>
        <button onClick={props.back}>Hide Dates</button>
    </div>
        )
}

export default DateTypeList