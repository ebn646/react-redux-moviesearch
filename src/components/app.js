import React, { Component } from 'react';
import SearchBar from '../containers/searchbar';
import MovieList from '../containers/movielist';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MovieList />
      </div>
    );
  }
}
