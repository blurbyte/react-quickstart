/* eslint no-constant-condition: ["error", { "checkLoops": false }] */
import * as types from '../actions/actionTypes';
import { fork, take, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { increaseCounterSuccess, decreaseCounterSuccess } from '../actions/counterActions';

// Although it is not the most realistic example for sure
// it shows a few COOL things you could do with redux-saga

// increases counter with 100ms delay

export function* increaseCounterAsync() {
  for (let i = 0; true; i++) {

    // waits for INCREASE_COUNTER_BY_AMOUNT action to be dispatched
    const { amount } = yield take(types.INCREASE_COUNTER_BY_AMOUNT);

    yield call(delay, 100);

    // only for first 4 times, when action got dispatched
    // it doubles the increased amount
    // afterwards increases by regular amount
    yield put(increaseCounterSuccess(i <= 3 ? amount * 2 : amount));
  }
}

// decreases counter with 100ms delay

export const counterValueFromState = (state) => state.counter;

export function* decreaseCounterAsync() {
  while (true) {

    // waits for DECREASE_COUNTER_BY_AMOUNT action to be dispatched
    const { amount, lowerLimit } = yield take(types.DECREASE_COUNTER_BY_AMOUNT);

    yield call(delay, 100);

    // gets counter value from store
    const currentCounterValue = yield select(counterValueFromState);

    // conditional dispatch
    // decrease counter value only if it's bigger than lowerLimit
    if (currentCounterValue > lowerLimit) {
      yield put(decreaseCounterSuccess(amount));
    }
  }
}

export default function* counterSagas() {
  yield [
    fork(increaseCounterAsync),
    fork(decreaseCounterAsync)
  ];
}
