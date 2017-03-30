// required for redux-saga generatos
import "regenerator-runtime/runtime";

/*eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

//styles reset
import 'sanitize.css/sanitize.css';

//router
import { ConnectedRouter } from 'react-router-redux';

//redux store configuration and browser history
import configureStore, { history } from './store';

//main app container and ScrollToTop helper
import App from './containers/App';
import ScrollToTop from './components/ScrollToTop';

//es6 promises polyfill
import Promise from 'promise-polyfill';

if (!window.Promise) {
  window.Promise = Promise;
}

//load favicon
import './favicon.ico';

//custom global styles
import './styles/globalStyles';

//in browser console use $r.store.getState() when Provider selected in ReactDevTools

//store first parameter is default state
//for example you can provide default starting value for counter:
//const store = configureStore({ counter: 10 });
const initialState = {};
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);

// install ServiceWorker
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
