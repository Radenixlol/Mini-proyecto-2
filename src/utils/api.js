import axios from "axios"

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json'
    },
    params: {
        api_key: '198211b29869f46d00a2c959098a1d49'
    }
})