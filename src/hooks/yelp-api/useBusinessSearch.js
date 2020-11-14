import {useState, useEffect} from 'react'
import * as api from './api'
import {YELP_BASE_URL} from './config'

export function useBusinessSearch(term,location) {
    const [businesses, setBusinesses] = useState([]);
    const [searchParams, setSearchParams] = useState({term, location})

    const fetchBusinesses = async () => {
        const axios = require('axios')
        const businesses = await axios.get(`${YELP_BASE_URL}/businesses/search?location=${location}`, {
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
            });  
        setBusinesses(businesses.data.businesses) 
    }
    /*
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
        */

    useEffect(() => {
        setBusinesses([])

        fetchBusinesses();
    
    }, [searchParams, setBusinesses]) // dependency list - hook re-executes on change
    
    return [businesses, searchParams, setSearchParams]
    
}