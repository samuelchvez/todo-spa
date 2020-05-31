// @flow
import i18n from 'i18n-js';
import {
  call,
  takeEvery,
  put,
  race,
  delay,
  select,
} from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { REQUEST_TIMEOUT } from '../settings';
import { throwTimeout } from '../lib/common-http-js';
import * as api from '../api';
import * as selectors from '../reducers';
import * as actions from '../actions/routineSteps';
import * as types from '../types/routineSteps';


function* createRoutineStep(action) {
  try {
    const token = yield select(selectors.getAuthToken);
    const { routine, id, title, priority, time } = action.payload;

    const { response, timeout } = yield race({
      response: call(
        [api.RoutineStep, 'create'],
        {
          data: { title, priority, time, belongs_to: routine },
          token,
        },
      ),
      timeout: delay(REQUEST_TIMEOUT),
    });

    if (timeout) {
      throwTimeout('createRoutineStep saga');
    }

    yield put(actions.completeAddRoutineStep(routine, id, response.id));
  } catch (error) {
    const { statusCode, message, data, isPlain } = error;
    yield put(actions.failAddRoutineStep({
      status: statusCode,
      message,
      data: isPlain ? i18n.t('serverError'): data,
      retryAction: action
    }));
  }
}

export function* watchRoutineStepCreationStarted(): Iterator<any> {
  yield takeEvery(
    types.ADD_ROUTINE_STEP_STARTED,
    createRoutineStep,
  );
}

function* removeRoutineStep(action) {
  try {
    const token = yield select(selectors.getAuthToken);
    const { oldId } = action.payload;

    const { timeout } = yield race({
      response: call(
        [api.RoutineStep, 'remove'],
        {
          id: oldId,
          token,
        },
      ),
      timeout: delay(REQUEST_TIMEOUT),
    });

    if (timeout) {
      throwTimeout('removeRoutineStep saga');
    }
  } catch (_error) {}
}

export function* watchRoutineStepDeletion(): Iterator<any> {
  yield takeEvery(
    types.ROUTINE_STEP_REMOVED,
    removeRoutineStep,
  );
}

function* updateRoutineStep(action) {
  try {
    const token = yield select(selectors.getAuthToken);
    const { id, ...data } = action.payload;

    const { timeout } = yield race({
      response: call(
        [api.RoutineStep, 'update'],
        {
          id,
          data,
          token,
        },
      ),
      timeout: delay(REQUEST_TIMEOUT),
    });

    if (timeout) {
      throwTimeout('updateRoutineStep saga');
    }
  } catch (_error) {}
}

export function* watchRoutineStepUpdated(): Iterator<any> {
  yield takeEvery(
    types.ROUTINE_STEP_UPDATED,
    updateRoutineStep,
  );
}
