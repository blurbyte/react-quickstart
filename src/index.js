/*eslint-disable import/default */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

//router
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';

//redux store
import configureStore from './store/configureStore';

//es6 promises polyfill
require('es6-promise').polyfill();

//load favicon
require('./favicon.ico');

//import styles
import './styles/styles.css';

//in browser console use $r.store.getState() when Provider selected in ReactDevTools

//store first parameter is default state
//for example you can provide default starting value for counter:
//const store = configureStore({ counter: 10 });
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
