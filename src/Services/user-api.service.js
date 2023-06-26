import axios from "axios"

const http = axios.create({
    baseURL: "https://signlingo.azurewebsites.net/api/",
    headers: {
        "Authorization": "Bearer " + window.sessionStorage.getItem('jwt')
    }
})

export class UserApiService{

    getAll(){
        return http.get("user/");
    }

    getUserById(id){
        return http.get(`user/${id}`);
    }

    getUserByEmail(email){
        return http.get(`user/email?email=${email}`);
    }

    SignUp(body){
        return http.post("user/signup", body);
    }

    Login(body){
        return http.post("user/login", body);
    }
}