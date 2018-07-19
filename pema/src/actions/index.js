import { FETCH_POST } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/expenses';

export const fetchAllPosts = () => {
    return(dispatch) => {
        return axios.get(apiUrl)
         .then(response => {
             dispatch(fetchPosts(response.data))
         }).catch(error => {
             throw(error);
         });
    };
};