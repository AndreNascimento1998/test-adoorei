export default class StorageManager {
    public static set(key: string, value: string | object) {
        const _value = StorageManager.isObject(value) ? JSON.stringify(value) : value
        localStorage.setItem(key, _value as string)
    }

    public static get(key: string): object | string | null {
        const item = localStorage.getItem(key)

        if (item) {
            return StorageManager.isObject(item) ? JSON.parse(item) : item
        }

        return null
    }

    public static delete(key: string): void {
        localStorage.removeItem(key)
    }

    private static isObject(value: string | object): boolean {
        return typeof value === 'object'
    }
}
