import * as types from './actionTypes';

// basic counter action creators

export const increaseCounterByAmount = amount => ({
  type: types.INCREASE_COUNTER_BY_AMOUNT,
  amount
});

export const decreaseCounterByAmount = (amount, lowerLimit) => ({
  type: types.DECREASE_COUNTER_BY_AMOUNT,
  amount,
  lowerLimit
});

export const increaseCounterSuccess = amount => ({
  type: types.INCREASE_COUNTER_SUCCESS,
  amount
});

export const decreaseCounterSuccess = amount => ({
  type: types.DECREASE_COUNTER_SUCCESS,
  amount
});
