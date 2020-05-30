// @flow
import i18n from 'i18n-js';
import {
  call,
  takeEvery,
  put,
  race,
  delay,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { REQUEST_TIMEOUT } from '../settings';
import { throwTimeout } from '../lib/common-http-js';
import { history } from '../router';
import { Account } from '../api';
import * as actions from '../actions/account';
import * as types from '../types/account';


function* createAccount(action) {
  try {
    const {
      username,
      email,
      firstName,
      password
    } = action.payload;

    const { timeout } = yield race({
      response: call(
        [Account, 'create'],
        {
          data: {
            first_name: firstName,
            username,
            email,
            password,
          },
        },
      ),
      timeout: delay(REQUEST_TIMEOUT),
    });

    if (timeout) {
      throwTimeout('createAccount saga');
    }

    yield put(actions.completeCreatingAccount());

    toast.success(i18n.t('accountCreationCompleted'));

    yield call([history, history.push], '/');
  } catch (error) {
    const { statusCode, message, data, isPlain } = error;
    yield put(actions.failCreatingAccount({
      status: statusCode,
      message,
      data: isPlain ? i18n.t('serverError'): data,
      retryAction: action
    }));

    toast.error(Object.keys(data).map(key => data[key]).join(''));
  }
}

export function* watchAccountCreationStarted(): Iterator<any> {
  yield takeEvery(
    types.ACCOUNT_CREATION_STARTED,
    createAccount,
  );
}
