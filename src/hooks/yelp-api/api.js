import {YELP_BASE_URL} from './config'
import queryString from 'query-string'

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams)
    const axios = require('axios');
    const locationSearched = "Oakland"
    axios.get(`${YELP_BASE_URL}${path}?location=${locationSearched}`, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`
        },
        params: {
        categories: 'Dinner',
        }
        })
        .then((res) => { 
            return res
        })
        .catch((err) => {
            return err
        })
    }

    
    
   