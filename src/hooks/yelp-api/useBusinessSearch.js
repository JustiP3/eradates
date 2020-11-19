import {useState, useEffect} from 'react'
import {YELP_BASE_URL} from './config'

export function useBusinessSearch(term, location) {
    const [businesses, setBusinesses] = useState([]);
    const [searchParams, setSearchParams] = useState({term, location})

    

    useEffect(() => {
        const fetchBusinesses = async () => {
            const axios = require('axios')
            let businesses = {data: {businesses: []}}
            businesses = await axios.get(`${YELP_BASE_URL}/businesses/search?location=${location}`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`
                },
                params: {
                categories: term,
                }
                })
                .then((res) => { 
                    return res
                })
                .catch((err) => {
                    return err
                });  
            if (!!businesses && !!businesses.data && !!businesses.data.businesses) {
                setBusinesses(businesses.data.businesses)
            }
        }
        setBusinesses([])

        fetchBusinesses();
    
    }, [searchParams, setBusinesses, location, term]) // dependency list - hook re-executes on change
    
    return [businesses, searchParams, setSearchParams]
    
}