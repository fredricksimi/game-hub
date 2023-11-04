import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8ddcf6b4b84349c3a5969a1fb8b5b711',
        // Access-Control-Allow-Origin: true
    }
})