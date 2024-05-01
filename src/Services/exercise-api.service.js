import axios from "axios"

const http = axios.create({
    baseURL: "https://artificialbrain.azurewebsites.net/api/",
    headers: {
        "Authorization": "Bearer " + window.sessionStorage.getItem('jwt')
    }
})

export class ExerciseApiService{

    getAll(){
        return http.get("Exercise");
    }

    getExerciseById(id){
        return http.get(`Exercise/${id}`);
    }

}