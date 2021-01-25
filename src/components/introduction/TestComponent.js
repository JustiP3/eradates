import React from 'react'


const TestComponent = (props) => {  
    
    const testRequest = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dateName: 'rollerskate', safe: 'true' })
        };
        fetch('http://localhost:9000/api/datetypes', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        }



    return(
        <div>  
            <button onClick={testRequest}>Click click</button>  
        </div>
    )
}

export default TestComponent