import React from 'react'

const DateIdea = (props) => {
    const dateIdeaName = props.name
    return(
    <div className="date-options-card" onClick={() => props.select(dateIdeaName)}>
        {dateIdeaName}
     </div>
     )
    }

export default DateIdea