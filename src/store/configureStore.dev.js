import {createStore, applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

//enables redux dev tools
const enhancers = compose(applyMiddleware(thunk, reduxImmutableStateInvariant()), window.devToolsExtension ? window.devToolsExtension() : f => f);

const configureStore = (initialState) => (
  createStore(rootReducer, initialState, enhancers)
);

export default configureStore;
