import axios from 'axios';

const api = axios.create({
    baseURL:'https://ita-project.herokuapp.com'
})

export default api;