import React,{ Component, PropTypes } from 'react';

class Movie extends Component {
  render() {
    console.log(this.props)
    let movie = this.props.movie;
    return (
      <li>
        <div>
          <img src={movie.poster_path} width="100" height="150" />
          <span>{movie.title}</span>
        </div>
      </li>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
