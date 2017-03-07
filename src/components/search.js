import React,{ Component, PropTypes } from 'react';
import SearchBar from '../containers/searchbar';
import MovieList from '../containers/movielist';

class Search extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList />
        {this.props.children}
      </div>
    );
  }
}

export default Search;
