import axios from 'axios';

const instance = axios.create({    
    baseURL:'https://simple-blog-api.crew.red',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;

