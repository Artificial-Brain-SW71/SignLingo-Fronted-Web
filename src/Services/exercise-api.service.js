import axios from "axios"

const http = axios.create({
    baseURL: "https://signlingo.azurewebsites.net/api/",
})

export class ExerciseApiService{

    getAll(){
        return http.get("Exercise/");
    }

    getExerciseById(id){
        return http.get(`Exercise/${id}`);
    }

}