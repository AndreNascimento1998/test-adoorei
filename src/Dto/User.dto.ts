import { IUser } from "@/Interface/IUser"

export default class UserDto implements IUser {
    idProduct: string
    name: string
    phone: string
    email: string
    password: string
    validPassword: string
    siteName: string

    constructor({
        name = '',
        phone = '',
        email = '',
        password = '', 
        validPassword = '',
        siteName = '',
        idProduct = ''}: Partial<IUser> = {}) {
            this.idProduct = idProduct
            this.name = name
            this.phone = phone
            this.email = email
            this.password = password
            this.validPassword = validPassword
            this.siteName = siteName

    }
}