// @flow
import type { ERROR_TYPE } from '../types/common';
import type {
  AUTHENTICATION_STARTED_TYPE,
  AUTHENTICATION_COMPLETED_TYPE,
  AUTHENTICATION_FAILED_TYPE,
  AUTHENTICATION_IDENTITY_CLEARED_TYPE,
  AUTHENTICATION_REFRESH_STARTED_TYPE,
  AUTHENTICATION_REFRESH_COMPLETED_TYPE,
  AUTHENTICATION_REFRESH_FAILED_TYPE,
} from '../types/auth';
import * as types from '../types/auth';


export const startLogin = (username: string, password: string): AUTHENTICATION_STARTED_TYPE => ({
  type: types.AUTHENTICATION_STARTED,
  payload: { username, password },
});

export const completeLogin = (token: string): AUTHENTICATION_COMPLETED_TYPE => ({
  type: types.AUTHENTICATION_COMPLETED,
  payload: { token },
});

export const failLogin = (error: ERROR_TYPE): AUTHENTICATION_FAILED_TYPE => ({
  type: types.AUTHENTICATION_FAILED,
  payload: error,
});

export const logout = (): AUTHENTICATION_IDENTITY_CLEARED_TYPE => ({
  type: types.AUTHENTICATION_IDENTITY_CLEARED,
});

export const startTokenRefresh = (): AUTHENTICATION_REFRESH_STARTED_TYPE => ({
  type: types.AUTHENTICATION_REFRESH_STARTED,
});

export const completeTokenRefresh = (token: string): AUTHENTICATION_REFRESH_COMPLETED_TYPE => ({
  type: types.AUTHENTICATION_REFRESH_COMPLETED,
  payload: { token },
});

export const failTokenRefresh = (error: ERROR_TYPE): AUTHENTICATION_REFRESH_FAILED_TYPE => ({
  type: types.AUTHENTICATION_REFRESH_FAILED,
  payload: error,
});
