
export default class User {
    username: string | null = null
    password: string | null = null

    constructor(username: string, password: string){
        this.validate(username, password)
    }

    
    private validate(username: string, password: string){
        const validEntityResult = this.isValidUsername(username) && this.isValidPassword(password)

        if(validEntityResult){
            this.username = username
            this.password = password
        }
    }

    private isValidUsername(username: string) {
        if(username === ''){
            return false
        }

        return true
    }

    private isValidPassword(password: string) {
        if(password.length < 6){
            return false
        }

        return true
    }
}