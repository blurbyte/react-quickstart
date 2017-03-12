import initialState from './initialState';
import * as types from '../actions/actionTypes';

const counterReducer = (state = initialState.counter, action) => {
  switch(action.type) {
    case types.INCREASE_COUNTER_SUCCESS:
      return state + action.amount;
    case types.DECREASE_COUNTER_SUCCESS:
      return state - action.amount;
    default:
      return state;
  }
};

export default counterReducer;
