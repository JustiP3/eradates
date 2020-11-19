import React from 'react'
import heartlogo from '../assets/heartlogo.png'
//import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import YelpTest from '../components/YelpTest'
import {dateOptions} from '../components/results/DateOptions'

export default function Results(props) {
  const optionsArray = dateOptions(props)
  //const term = "Dinner"
  //const locationParam = "Oakland"
  //const [businesses, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);  
  return(
      <div className="container">
        
          <img src={heartlogo} alt="heart logo" className="heartlogo" />
          
          <YelpTest businesses={optionsArray}/>
          
      </div>
  )
}

