// import * as types from '../actions/actionTypes';
import { fork } from 'redux-saga/effects';

export function* defaultSaga() {
  yield;
}

export default function* counterSagas() {
  yield [
    fork(defaultSaga)
  ];
}
