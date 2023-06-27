import axios from "axios"

const http = axios.create({
    baseURL: "https://signlingo.azurewebsites.net/api/",
    headers: {
        "Authorization": "Bearer " + window.sessionStorage.getItem('jwt')
    }
})

export class ModuleApiService{
    getAll(){
        return http.get("Module");
    }

    getModuleById(id){
        return http.get(`Module/${id}`);
    }
}