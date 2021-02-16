import {useState, useEffect} from 'react'
import {YELP_BASE_URL} from './config'

export default function useBusinessSearch(term, location) {
    const [businesses, setBusinesses] = useState([]);
    const [searchParams, setSearchParams] = useState({term, location})
   
    

    useEffect(() => {
        const fetchBusinesses = async () => {
            const axios = require('axios')
            let b = {data: {businesses: []}}
            b = await axios.get(`${YELP_BASE_URL}/businesses/search?latitude=${location.latitude}&longitude=${location.longitude}&term=${term}`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods' : 'GET'
                }
                })
                .then((res) => { 
                    return res
                })
                .catch((err) => {
                    return err
                });  
            if (!!b && !!b.data && !!b.data.businesses) {
                setBusinesses(b.data.businesses)
            }
        }

        fetchBusinesses();
    
    }, [searchParams, location.latitude, location.longitude, term]) // dependency list - hook re-executes on change
    
    return [businesses, setSearchParams]
    
}