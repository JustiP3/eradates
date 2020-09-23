import React from 'react'

export default function DateForm(props) {
    return(
        <div className="card align-items-center">
            <div className="card-title">
                <h1>Hello.</h1>
            </div>  
            <div className="card-body">
                This is some text within a card body.            
                {props.data.relationshipStatus}, {props.data.dateType}, {props.data.budget}, {props.data.era}
            </div>            
        </div>
        )

}

