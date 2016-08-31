import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

//import each reducer to combine
import counter from './counterReducer';

const rootReducer = combineReducers({
  counter, routing: routerReducer
});

export default rootReducer;
