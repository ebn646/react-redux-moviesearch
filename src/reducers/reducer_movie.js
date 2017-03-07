import {FETCH_SEARCH_RESULTS, FETCH_MOVIE} from '../actions/index';

const INITIAL_STATE = { all: [], movie: null }

export default function (state = null, action) {
  switch(action.type){
    case FETCH_MOVIE:
      return action.payload.data;
  }
  return state;
}
