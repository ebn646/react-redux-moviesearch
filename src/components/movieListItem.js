import React,{ Component, PropTypes } from 'react';
import { Link } from 'react-router';

class MovieItem extends Component {
  render() {
    console.log(this.props)
    let movie = this.props.movie;
    return (
      <li key={movie.id}>
        <div>
            <Link to={ "/movie/" + movie.id }>
              <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/`+movie.poster_path} width="100" height="150" />
              <span>{movie.title}</span>
            </Link>
        </div>
      </li>
    );
  }
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
