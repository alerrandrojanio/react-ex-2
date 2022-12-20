import axios from "axios";

const api_key = "0a1a9bb80e9156974c761c157f50ed54";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/550?api_key=",
  //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
})

export default api;