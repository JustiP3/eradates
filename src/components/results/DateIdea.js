import React from 'react'

const DateIdea = (props) => {return(<div onClick={props.select(props.name)} className="date-options-card">{props.name}</div>)}

export default DateIdea