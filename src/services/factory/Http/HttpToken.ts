import StorageManager from '@/helpers/Storage/StorageManager'

export default class HttpToken {
    private static readonly TOKEN_KEY = 'access_token'

    public static getToken() {
        return StorageManager.get(HttpToken.TOKEN_KEY)
    }

    public static setToken(accessToken: string) {
        StorageManager.set(HttpToken.TOKEN_KEY, accessToken)
    }

    public static clearToken() {
        StorageManager.delete(HttpToken.TOKEN_KEY)
    }

    public static isValidToken() {
        return !!HttpToken.getToken()
    }

}
