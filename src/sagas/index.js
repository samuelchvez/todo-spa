import { fork, all } from 'redux-saga/effects';

import {
  watchLoginStarted,
  // watchRefreshTokenStarted,
} from './auth';
import {
  watchAccountCreationStarted,
} from './account';
import {
  watchRoutineCreationStarted,
  watchRoutinesFetchStarted,
  watchRoutineDeletion,
} from './routines';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    // fork(watchRefreshTokenStarted),
    fork(watchAccountCreationStarted),
    fork(watchRoutineCreationStarted),
    fork(watchRoutinesFetchStarted),
    fork(watchRoutineDeletion),
  ]);
}


export default mainSaga;
