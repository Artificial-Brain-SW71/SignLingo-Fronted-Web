import axios from "axios"

const http = axios.create({
    baseURL: "https://signlingo.azurewebsites.net/api/",
    headers: {
        "Authorization": "Bearer " + window.sessionStorage.getItem('jwt')
    }
})

export class AnswerApiService{

    getAnswerByExerciseId(exerciseId){
        return http.get(`Answer/exercise-answer?exerciseId=${exerciseId}`)
    }
}