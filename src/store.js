// store configuration (middlewares) depending on environment setting
import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

function configureStoreProd(initialState) {
  const middlewares = [
    thunk
  ];

  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}

function configureStoreDev(initialState) {
  const middlewares = [
    thunk,
    reduxImmutableStateInvariant()
  ];

  const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const devStore = createStore(rootReducer, initialState, enhancers(applyMiddleware(...middlewares)));

  // enable hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      devStore.replaceReducer(nextReducer);
    });
  }

  return devStore;
}

const store = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default store;
