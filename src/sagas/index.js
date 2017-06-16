import { fork, all } from 'redux-saga/effects';

import counterSagas from './counterSagas';

export default function* rootSaga() {
  yield all([
    fork(counterSagas)
  ]);
}
