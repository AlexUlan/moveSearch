import * as axios from "axios/index"
const apiKey ="fefda1738ce996951f1c152fc36f62f4";
const instance = axios.create({
 // withCredentials: true,
  baseURL:"https://api.themoviedb.org/3",
  // headers: {
  //   "API-KEY": "fefda1738ce996951f1c152fc36f62f4"
  // }
})
export const moviesAPI = {
  getTopMovies(){
    return instance
    .get(`trending/all/week?api_key=${apiKey}&language=ru-RU`)
    .then(response => response.data)
  },
  getDataQuery(string){
    return instance
    .get(`search/multi?api_key=${apiKey}&language=ru-RU&query=${string}`)
    .then(response=> response.data)
  },
  getSelectedData(type, id){
    return instance
    .get(`/${type}/${id}/api_key=${apiKey}&language=ru-RU`)
    .then(response => response.data)
  }

} 