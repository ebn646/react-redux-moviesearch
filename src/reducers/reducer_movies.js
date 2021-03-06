import {FETCH_SEARCH_RESULTS, FETCH_MOVIE} from '../actions/index';

const INITIAL_STATE = { all: [], movie: null }

export default function(state = [], action){
  switch(action.type){
    case FETCH_SEARCH_RESULTS:
      return[ ...state, action.payload.data.results ];
  }
  return state;
}
