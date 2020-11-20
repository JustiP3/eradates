import React from 'react'
import heartlogo from '../assets/heartlogo.png'
//import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import {dateOptions} from '../components/results/DateOptions'
import DateIdea from '../components/results/DateIdea'
//import YelpResult from '../components/results/YelpResult'

export default function Results(props) {
  const optionsArray = dateOptions(props)
  const dateIdeaList = optionsArray.map((x) => <DateIdea name={x} />)
  //const yelpResultList = <YelpResult />
  //const term = "Dinner"
  //const locationParam = "Oakland"
  //const [businesses, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);  

  return(
      <div className="container">
        
          <img src={heartlogo} alt="heart logo" className="heartlogo" />
          {dateIdeaList}
          
      </div>
  )
}

