import { ENV } from '@/config/env';
import axios, { AxiosInstance } from 'axios'
class Conection {
    instance :AxiosInstance

    constructor(){
        this.instance = axios.create({
            baseURL: ENV.baseURL,
            timeout: 3000,
            headers: { 
                'Accept-Language': 'application/json',
                'x-access-token': localStorage.getItem('TOKEN')
            }
        })
    }
}


export default Conection