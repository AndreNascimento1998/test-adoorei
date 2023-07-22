import User from "@/entity/User";
import HttpClient from "./factory/Http/HttpClient";
import HttpToken from "./factory/Http/HttpToken";
import UserDto from "@/Dto/User.dto";

class UserHttp extends HttpClient {
    
    constructor(){
        super('https://fakestoreapi.com')
    }

    public async singIn(user: User) {
        try {
            const result = await this.post('/auth/login', user)
            
            if ('token' in result) {
                HttpToken.setToken(result.token)

                return true
            }

            return false
        } catch (error) {
            console.log(error)
            return false
        }
    }

    public async save(user: UserDto) {
        const path = '/users'

        return await this.post(path, user)
    }
}

export { UserHttp }
export default new UserHttp()