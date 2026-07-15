import axios from 'axios'

const api = axios.create({
    baseURL: 'https://crud-users-api-4zzn.onrender.com'
})

export default api