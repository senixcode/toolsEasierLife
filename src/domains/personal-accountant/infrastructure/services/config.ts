import { ENV } from '@/config/env';
import axios from 'axios'

const instance = axios.create({
    baseURL: ENV.baseURL,
    timeout: 3000,
    headers: { 'Accept-Language': 'application/json' }
})

export default instance