import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios'

const Api:AxiosInstance  = axios.create({
    baseURL: "http://localhost:5000/api/"
})

const authApi:AxiosInstance  = axios.create({
    baseURL: "http://localhost:5000/api/"
})

const authInterceptor = (config: InternalAxiosRequestConfig) =>{
    if(config.headers) {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
    }
    return config
}

authApi.interceptors.request.use(authInterceptor)

export {
    authApi,
    Api
}