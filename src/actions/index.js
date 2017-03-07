import axios from 'axios';

const API_KEY = '1cec0394fa447a1f03d7a744faf9cbc9';
const ROOT_URL = 'https://api.themoviedb.org/3/search/movie?api_key=1cec0394fa447a1f03d7a744faf9cbc9&language=en-US&query=';

export const FETCH_SEARCH_RESULTS = "FETCH_SEARCH_RESULTS";
export const FETCH_MOVIE= "FETCH_MOVIE";
//dispatch action responsible for making ajax api request
export function fetchSearchResults(movie){
  //action creators always return an action an must have a type
  const url = ROOT_URL+movie;
  const request = axios.get(url);
  return{
    type: FETCH_SEARCH_RESULTS,
    payload: request
  }
}

//1.fetchMovie
//2.return action
export function fetchMovie(id){
  //const request = axios.get(`${ROOT_URL}/movie/${id}`);
  const request = axios.get('https://api.themoviedb.org/3/movie/364?api_key=1cec0394fa447a1f03d7a744faf9cbc9&language=en-US');
  return{
    type: FETCH_MOVIE,
    payload: request
  }
}
