import {useState, useEffect} from 'react'
import {YELP_BASE_URL} from './config'

export function useBusinessSearch(term, location) {
    const [businesses, setBusinesses] = useState([]);
    const [searchParams, setSearchParams] = useState({term, location})
    const [latitude, longitude] = location
    

    useEffect(() => {
        const fetchBusinesses = async () => {
            const axios = require('axios')
            let b = {data: {businesses: []}}
            console.log(`latitude=${latitude}&longitude=${longitude}&term=${term}`)
            b = await axios.get(`${YELP_BASE_URL}/businesses/search?latitude=${latitude}&longitude=${longitude}&term=${term}`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`
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
        //setBusinesses([])

        fetchBusinesses();
    
    }, [searchParams, setBusinesses, location, term, latitude, longitude]) // dependency list - hook re-executes on change
    
    return [businesses, searchParams, setSearchParams]
    
}