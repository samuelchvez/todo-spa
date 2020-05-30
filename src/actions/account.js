// @flow
import type { ERROR_TYPE } from '../types/common';
import type {
  ACCOUNT_CREATION_STARTED_TYPE,
  ACCOUNT_CREATION_COMPLETED_TYPE,
  ACCOUNT_CREATION_FAILED_TYPE,
} from '../types/account';
import * as types from '../types/account';


export const startCreatingAccount = (
  firstName: string,
  username: string,
  email: string,
  password: string,
): ACCOUNT_CREATION_STARTED_TYPE => ({
  type: types.ACCOUNT_CREATION_STARTED,
  payload: {
    firstName,
    username,
    email,
    password,
  },
});

export const completeCreatingAccount = (): ACCOUNT_CREATION_COMPLETED_TYPE => ({
  type: types.ACCOUNT_CREATION_COMPLETED,
});

export const failCreatingAccount = (error: ERROR_TYPE): ACCOUNT_CREATION_FAILED_TYPE => ({
  type: types.ACCOUNT_CREATION_FAILED,
  payload: error,
});
