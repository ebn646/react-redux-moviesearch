import React from 'react';

//route defines a match between a url and a comonent

import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Search from './components/Search';
import MovieDetail from './containers/MovieDetail';

export default(
  <Route path="/" component={ App } >
    <IndexRoute component={ Search } />
    <Route path="movie/:id" component={ MovieDetail } />
  </Route>
);
