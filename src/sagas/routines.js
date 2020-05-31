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
import { Routine } from '../api';
import * as selectors from '../reducers';
import * as actions from '../actions/routines';
import * as types from '../types/routines';
import { arrayOfRoutines } from '../schemas/routines';


function* createRoutine(action) {
  try {
    const token = yield select(selectors.getAuthToken);
    const { id, title } = action.payload;

    const { response, timeout } = yield race({
      response: call(
        [Routine, 'create'],
        {
          data: { title },
          token,
        },
      ),
      timeout: delay(REQUEST_TIMEOUT),
    });

    if (timeout) {
      throwTimeout('createRoutine saga');
    }

    yield put(actions.completeAddRoutine(id, response.id));
  } catch (error) {
    const { statusCode, message, data, isPlain } = error;
    yield put(actions.failAddRoutine({
      status: statusCode,
      message,
      data: isPlain ? i18n.t('serverError'): data,
      retryAction: action
    }));
  }
}

export function* watchRoutineCreationStarted(): Iterator<any> {
  yield takeEvery(
    types.ADD_ROUTINE_STARTED,
    createRoutine,
  );
}

function* fetchRoutines(action) {
  try {
    const token = yield select(selectors.getAuthToken);
    const userId = yield select(selectors.getAuthUserID);

    const { response, timeout } = yield race({
      response: call(
        [Routine, 'list'],
        {
          filters: { created_by: userId },
          token,
        },
      ),
      timeout: delay(REQUEST_TIMEOUT),
    });

    if (timeout) {
      throwTimeout('fetchRoutines saga');
    }

    const {
      entities: { routines },
      result,
    } = normalize(response, arrayOfRoutines);

    yield put(actions.completeFetchRoutines(
      routines,
      result,
    ));
  } catch (error) {
    const { statusCode, message, data, isPlain } = error;
    yield put(actions.failFetchRoutines({
      status: statusCode,
      message,
      data: isPlain ? i18n.t('serverError'): data,
      retryAction: action
    }));
  }
}

export function* watchRoutinesFetchStarted(): Iterator<any> {
  yield takeEvery(
    types.FETCH_ROUTINES_STARTED,
    fetchRoutines,
  );
}

function* removeRoutine(action) {
  try {
    const token = yield select(selectors.getAuthToken);
    const id = action.payload;

    const { timeout } = yield race({
      response: call(
        [Routine, 'remove'],
        {
          id,
          token,
        },
      ),
      timeout: delay(REQUEST_TIMEOUT),
    });

    if (timeout) {
      throwTimeout('removeRoutine saga');
    }
  } catch (_error) {}
}

export function* watchRoutineDeletion(): Iterator<any> {
  yield takeEvery(
    types.ROUTINE_REMOVED,
    removeRoutine,
  );
}
