import { fork, all } from 'redux-saga/effects';

import {
  watchLoginStarted,
  // watchRefreshTokenStarted,
} from './auth';
import {
  watchAccountCreationStarted,
} from './account';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchAccountCreationStarted),
    // fork(watchRefreshTokenStarted),
  ]);
}


export default mainSaga;
