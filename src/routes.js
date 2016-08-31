import React from 'react';
import {Route, IndexRoute} from 'react-router';

//import components
import App from './components/App';
import MainPage from './components/main/MainPage';
import CounterPage from './components/counter/CounterPage';
import NotFoundPage from './components/common/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
