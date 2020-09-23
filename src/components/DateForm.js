import React from 'react'

export default function DateForm(props) {
    return(
        <div>
            <h1>
                DateForm Test Content
            </h1>
            <p>
                {props.data.relationshipStatus}, {props.data.dateType}, {props.data.budget}, {props.data.era}
            </p>
        </div>
        )

}

