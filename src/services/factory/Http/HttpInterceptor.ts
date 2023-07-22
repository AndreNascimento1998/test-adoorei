import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import HttpToken from './HttpToken'
import Swal from 'sweetalert2'

export default class HttpInterceptor {
    public currentUrl = ''
    public httpClient: AxiosInstance

    constructor(httpClient: AxiosInstance) {
        this.httpClient = httpClient

        this.setup()
    }

    private setup() {
        this.httpClient.interceptors.request.use(this.handleRequest())
        this.httpClient.interceptors.response.use(this.handleResponse())
    }

    private handleRequest() {
        return (config: InternalAxiosRequestConfig) => {
            if (config?.url) {
                this.currentUrl = config.url
                config.headers!['Authorization'] = `Bearer ${HttpToken.getToken()}`
            }

            return config
        }
    }

    private handleResponse() {
        return (response: AxiosResponse) => {
            if (response.status >= 400) {
                if (response.status === 401) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooops...',
                        text: 'Acesso não autorizado',
                    }).then(() => {
                        return null
                    })
                }
                return Promise.reject(response)
            }

            return response.data
        }
    }

    /* private checkToken() {
        Quando eu criar a api para validar o tempo de expiração do token
        if (!HttpToken.getToken() && window.location.pathname !== '/login') {
            HttpToken.clearToken()

            this.currentUrl = window.location.href
            window.location.href = '/login'
        }
    } */
}
