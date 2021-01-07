import React, {useState} from 'react'

import YelpResult from './YelpResult'
import heartlogo from '../../assets/heartlogo.png'

export default function YelpResultsList(props) {
    const [loading, setLoading] = useState(true)
    const nowLoading = () => setTimeout(notLoading, 1000) 
    const notLoading = () => setLoading(false) 

    const yelpResultList = props.businesses.map(x => <YelpResult business={x} key={x}/>)

    nowLoading()
    
    if (!!loading) {
        return(
          <div className="container">
            
              <img src={heartlogo} alt="heart logo" className="heartlogo" /><br />
              <div className="card">
              <span><button className="button" onClick={()=>props.back()}>Back</button></span>
            
              <h1>...Loading...</h1>
            
              </div>
          </div>
      )
      } else {
         return(
        <div className="container">
          
            <img src={heartlogo} alt="heart logo" className="heartlogo" />
          
            <div className="date-idea-div">
              <h1>Results</h1>
              
              <span><button className="button" onClick={()=>props.back()}>Back</button></span>
  
              {/* onclick - open in new tab*/ }
              {yelpResultList}
            </div>
  
            
        </div>
    ) }

} 
