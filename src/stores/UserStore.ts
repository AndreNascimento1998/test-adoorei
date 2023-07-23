import UserDto from "@/Dto/User.dto";
import User from "@/entity/User";
import UserHttp from "@/services/UserHttp";
import { defineStore } from "pinia";


export const useUserStore = defineStore('user', () => {
    
    async function singIn(user: User){
        return await UserHttp.singIn(user)
    }

    async function saveUser(user: UserDto) {
        return await UserHttp.save(user)
    }

    async function fetchUserById(id: string) {
        return await UserHttp.fetchById(id)
    }

    return {
        singIn,
        saveUser,
        fetchUserById
    }
})