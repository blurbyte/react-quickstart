import * as types from './actionTypes';

//basic counter action creators

export const increaseCounter = (amount) => (
  { type: types.INCREASE_COUNTER, amount }
);

export const decreaseCounter = (amount) => (
  { type: types.DECREASE_COUNTER, amount }
);

//async action
//example of delaying counter increment by set amout of miliseconds
export const increaseCounterWithDelay = (amount, delay = 400) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increaseCounter(amount));
    }, delay);
  };
};

//action creator which performs conditional dispatch
//such logic could be placed in event handler as well
export const decreaseIfGreaterThan = (amount, testValue) => {
  return (dispatch, getState) => {
    const {counter} = getState();
    if(counter > testValue) {
      dispatch(decreaseCounter(amount));
    }
    else {
      return;
    }
  };
};
