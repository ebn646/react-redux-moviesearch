//1.container needs to be able to call an action creator
//2.we must connect data to be rendered
//3.connect MapStatetoProps

import React,{ Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/index';
import MovieItem from '../components/movieListItem'

class MovieList extends Component{
  constructor(props){
    super(props);

  }

  render(){
    if(this.props.movies.length <= 0){
      return <div></div>
    }
     var movies = this.props.movies[0].map(function(movie){
                     return <MovieItem movie={movie} />;
                  })
    console.log(this.props.movies[0])
     return  <ul>{ movies }</ul>
  }
}

function mapStateToProps(state){
  //state.movies is assigned to movies key in reducers index
  return {movies:state.movies};
}

export default connect(mapStateToProps)(MovieList);
