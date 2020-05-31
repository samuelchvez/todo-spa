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
  watchRoutineFetch,
} from './routines';
import {
  watchRoutineStepCreationStarted,
  watchRoutineStepDeletion,
  watchRoutineStepUpdated,
} from './routineSteps';


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    // fork(watchRefreshTokenStarted),
    fork(watchAccountCreationStarted),
    fork(watchRoutineCreationStarted),
    fork(watchRoutinesFetchStarted),
    fork(watchRoutineDeletion),
    fork(watchRoutineFetch),
    fork(watchRoutineStepCreationStarted),
    fork(watchRoutineStepDeletion),
    fork(watchRoutineStepUpdated),
  ]);
}


export default mainSaga;
