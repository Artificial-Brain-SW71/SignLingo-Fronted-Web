import axios from "axios"

const http = axios.create({
    baseURL: "https://signlingo.azurewebsites.net/api/",
})

export class CityApiService{
    getAll(){
        return http.get("City")
    }

    getCountryById(id){
        return http.get(`City/${id}`)
    }
}