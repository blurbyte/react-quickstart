import { fork } from 'redux-saga/effects';

import counterSagas from './counterSagas';

export default function* rootSaga() {
  yield [
    fork(counterSagas)
  ];
}