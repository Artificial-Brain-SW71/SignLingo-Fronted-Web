import axios from "axios"
import {UserApiService} from "@/Services/user-api.service";

const http = axios.create({
    baseURL: "https://artificialbrain.azurewebsites.net/api/",
    headers: {
        "Authorization": "Bearer " + window.sessionStorage.getItem('jwt')
    }
})

export class UserModuleApiService{

    getAll(){
        return http.get("usermodule");
    }

    getUserModuleByIds(userId, moduleId){
        return http.get(`usermodule/userId=${userId}&moduleId=${moduleId}`);
    }

    getModulesByUserEmail(email){
        return http.get(`usermodule/email?email=${email}`);
    }
}