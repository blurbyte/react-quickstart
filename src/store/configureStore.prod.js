import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

//redux-thunk is required for asynchronous actions
const configureStore = (initialState) => (
  createStore(rootReducer, initialState, applyMiddleware(thunk))
);

export default configureStore;
