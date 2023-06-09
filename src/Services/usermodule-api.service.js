import axios from "axios"
import {UserApiService} from "@/Services/user-api.service";

const http = axios.create({
    baseURL: "https://signlingo.azurewebsites.net/api/",
})

export class UserApiService{

    getAll(){
        return http.get("UserModule")
    }

    getUserModuleByIds(userId, moduleId){
        return http.get(`UserModule/userId=${userId}&moduleId=${moduleId}`)
    }

}