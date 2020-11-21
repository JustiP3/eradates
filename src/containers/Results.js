import React from 'react'
import heartlogo from '../assets/heartlogo.png'
import {useBusinessSearch} from '../hooks/yelp-api/useBusinessSearch'
import {dateOptions} from '../components/results/DateOptions'
import DateIdea from '../components/results/DateIdea'
import YelpResult from '../components/results/YelpResult'

export default function Results(props) {
  const optionsArray = dateOptions(props)
  const dateIdeaList = optionsArray.map((x) => <DateIdea key={Math.random() * 1000} name={x} />)
  
  const term = "Dinner"
  const locationParam = "Oakland"
  const [businesses, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);  
  const yelpResultList = businesses.map((x) => <YelpResult key={Math.random() * 1000} business={x} />)

  return(
      <div className="container">
        
          <img src={heartlogo} alt="heart logo" className="heartlogo" />
          {dateIdeaList}
          {yelpResultList}
          
      </div>
  )
}

