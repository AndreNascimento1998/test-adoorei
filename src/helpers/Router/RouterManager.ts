import HttpToken from '@/services/factory/Http/HttpToken'

export default class RouterManager {
    private to
    private from
    private readonly next

    constructor(to: any, from: any, next: any) {
        this.to = to
        this.from = from
        this.next = next
    }

    public authRoute() {
        if (this.to.name === 'login' && HttpToken.isValidToken()) {
            this.next({ name: 'home' })
        }
        if (this.to.meta.requireAuth) {
            if (HttpToken.isValidToken()) {
                this.next()
            } else {
                this.next({ name: 'login' })
            }
        } else {
            this.next()
        }
    }
}
