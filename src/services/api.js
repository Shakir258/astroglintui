import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app-66ea869c-833f-4d9e-ac9f-c4944758fd84.cleverapps.io/astroglint', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;