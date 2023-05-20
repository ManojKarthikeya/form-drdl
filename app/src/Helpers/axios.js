import axios from 'axios'
const axiosInstance = axios.create({
    baseURL : "http://localhost:5099/"
})

export default axiosInstance