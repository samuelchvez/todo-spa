// @flow
import jwtDecode from 'jwt-decode';
import { combineReducers } from 'redux';

import type { ID_TYPE, ERROR_TYPE } from '../types/common';
import * as common from './common-reducers';
import * as types from '../types/auth';


export type AuthState = {
  token: ?string,
  decoded: ?Object,
  isAuthenticating: boolean,
  isRefreshing: boolean,
  loginError: ?ERROR_TYPE,
  refreshingError: ?ERROR_TYPE,
};

const token = common.keyExtractor({
  clear: [
    types.AUTHENTICATION_STARTED,
    types.AUTHENTICATION_FAILED,
    types.AUTHENTICATION_IDENTITY_CLEARED
  ],
  set: [
    types.AUTHENTICATION_COMPLETED,
    types.AUTHENTICATION_REFRESH_COMPLETED,
  ],
  extractionKey: 'token',
  default: null,
});

const decoded = common.keyExtractor({
  clear: [
    types.AUTHENTICATION_STARTED,
    types.AUTHENTICATION_FAILED,
    types.AUTHENTICATION_IDENTITY_CLEARED
  ],
  set: [
    types.AUTHENTICATION_COMPLETED,
    types.AUTHENTICATION_REFRESH_COMPLETED,
  ],
  extractionKey: 'token',
  transform: jwtDecode,
  default: null,
});

const isAuthenticating = common.isFetching({
  started: [types.AUTHENTICATION_STARTED],
  succeed: [types.AUTHENTICATION_COMPLETED],
  failed: [types.AUTHENTICATION_FAILED],
});

const loginError = common.error({
  populate: [types.AUTHENTICATION_FAILED],
  clear: [
    types.AUTHENTICATION_STARTED,
    types.AUTHENTICATION_COMPLETED,
  ],
});

const isRefreshing = common.isFetching({
  started: [types.AUTHENTICATION_REFRESH_STARTED],
  succeed: [types.AUTHENTICATION_REFRESH_COMPLETED],
  failed: [types.AUTHENTICATION_REFRESH_FAILED],
});

const refreshingError = common.error({
  populate: [types.AUTHENTICATION_REFRESH_FAILED],
  clear: [
    types.AUTHENTICATION_REFRESH_STARTED,
    types.AUTHENTICATION_REFRESH_COMPLETED,
  ],
});


const auth = combineReducers({
  token,
  decoded,
  isAuthenticating,
  isRefreshing,
  loginError,
  refreshingError,
});


export default auth;


export const getAuthToken = (state: AuthState): ?string => state.token;
export const getIsAuthenticating = (state: AuthState): boolean => state.isAuthenticating;
export const getLoginError = (state: AuthState): ?ERROR_TYPE => state.loginError;
export const getAuthUserID = (state: AuthState): ?ID_TYPE => state.decoded ? state.decoded.user_id : null;
export const getAuthExpiration = (state: AuthState): ?number => state.decoded ? state.decoded.exp : null;
export const getAuthUsername = (state: AuthState): ?string => state.decoded ? state.decoded.username : null;
export const getIsRefreshingToken = (state: AuthState): boolean => state.isRefreshing;
export const getRefreshingError = (state: AuthState): ?ERROR_TYPE => state.refreshingError;
