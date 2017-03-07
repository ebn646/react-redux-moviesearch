import { combineReducers } from 'redux';
import MovieListReducer from './reducer_movies.js';
import MovieReducer from './reducer_movie.js';

const rootReducer = combineReducers({
  movies: MovieListReducer,
  movie: MovieReducer
});

export default rootReducer;
