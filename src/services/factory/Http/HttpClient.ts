import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import HttpInterceptor from './HttpInterceptor'
import { useGlobalStore } from '@/stores/GlobalStore'

export default abstract class HttpClient {
    protected readonly instance: AxiosInstance

    protected constructor(baseUrl = '') {
        this.instance = axios.create({
            validateStatus(status) {
                return status >= 200 && status <= 522
            },
            baseURL: baseUrl,
            headers: {
                'Content-type': 'application/json',
            },
        })

        this.setupInterceptors()
    }

    get client() {
        return this.instance
    }

    protected get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
        return this.request<T, R, D>(config ?? { method: 'get', url })
    }

    protected post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.request(config ?? { method: 'post', url, data })
    }

    protected put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.request(config || { method: 'put', url, data })
    }

    protected delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.request(config || { method: 'delete', url })
    }

    private async request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
        const globalStore = useGlobalStore()
        globalStore.loadingPage = true

        try {
            return await this.instance.request<T, R, D>(config)
        } catch (e: any) {
            let messages = e.data
            messages = Array.isArray(messages) ? messages : [messages]

            throw {
                error: e,
                messages:
                    messages.map((m: any) => m?.message).join('<br>') ||
                    'Ocorreu um erro ao processar sua requisição, tente novamente mais tarde.',
            }
        } finally {
            globalStore.loadingPage = false
        }
    }

    private setupInterceptors() {
        new HttpInterceptor(this.instance)
    }
}
