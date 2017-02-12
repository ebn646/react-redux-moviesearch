import axios from 'axios';

const API_KEY = '1cec0394fa447a1f03d7a744faf9cbc9';
const ROOT_URL = 'https://api.themoviedb.org/3/search/movie?api_key=1cec0394fa447a1f03d7a744faf9cbc9&language=en-US&query=';

export const FETCH_MOVIES = "FETCH_MOVIES";

//dispatch action responsible for making ajax api request
export function fetchMovies(city){
  //action creators always return an action an must have a type
  const url = ROOT_URL+city;
  const request = axios.get(url);
  return{
    type: FETCH_MOVIES,
    payload: request
  }
}
