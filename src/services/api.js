import axios from 'axios';
import { API_KEY, BASE_URL } from '../utils/constants';

export const getCompanies = () => {
    const url = `${BASE_URL}/company/list`;
    const queryParams = new URLSearchParams({
        apiKey: API_KEY,
        onlyMyRecords: 'false',
        pageNumber: '0',
        pageSize: '20',
        sort: 'DESC',
        sortField: 'createdOn'
    }).toString();
    
    return axios.get(`${url}?${queryParams}`);
};
