// @flow
import {
  call,
  takeEvery,
  // put,
  race,
  // all,
  delay,
  // select,
} from 'redux-saga/effects';

import { REQUEST_TIMEOUT } from '../settings';
import { throwTimeout } from '../lib/common-http-js';
import { Account } from '../api';
// import * as selectors from '../reducers';
// import * as actions from '../actions/account';
import * as types from '../types/account';


function* createAccount(action) {
  try {
    const {
      username,
      email,
      firstName,
      password
    } = action.payload;

    const { response, timeout } = yield race({
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

    console.log("RESPONSE", response);

    // if (response.status === 200) {
    //   const { token } = yield response.json();
    //   yield put(actions.completeLogin(token));
    // } else {
    //   const { non_field_errors } = yield response.json();
    //   yield put(actions.failLogin(non_field_errors[0]));
    // }
  } catch (error) {
    console.log("errorazo", error)
    // yield put(actions.failLogin('Falló horrible la conexión mano'));
  }
}

export function* watchAccountCreationStarted(): Iterator<any> {
  yield takeEvery(
    types.ACCOUNT_CREATION_STARTED,
    createAccount,
  );
}
