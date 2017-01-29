import React from 'react';
import { Route, IndexRoute } from 'react-router';

//import components
import App from './containers/App';
import HomePage from './containers/HomePage';
import ManageCounterPage from './containers/ManageCounterPage';
import NotFoundPage from './containers/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={ManageCounterPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
