import {YELP_BASE_URL} from './config'
import queryString from 'query-string'

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams)
    return fetch(`${YELP_BASE_URL}${path}?${query}`, {
        headers: {
            Authorizations: `Bearer ${process.env.REACT_APP_YELP_KEY}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    })
}