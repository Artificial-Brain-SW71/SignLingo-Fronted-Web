import axios from "axios"

const http = axios.create({
    baseURL: "https://artificialbrain.azurewebsites.net/api/"
})

export class CountryApiService{

    getAll(){
        return http.get("Country")
    }

    getCountryById(id){
        return http.get(`Country/${id}`)
    }

}