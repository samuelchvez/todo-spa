// @flow
import { combineReducers } from 'redux';

import type { AuthState } from './auth';
import auth, * as authSelectors from './auth';


type STATE_TYPE = {
  auth: AuthState,
};

const reducer = combineReducers({
  auth,
});


export const getAuthToken = (state: STATE_TYPE) => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = (state: STATE_TYPE) => authSelectors.getIsAuthenticating(state.auth);
export const getLoginError = (state: STATE_TYPE) => authSelectors.getLoginError(state.auth);
export const isAuthenticated = (state: STATE_TYPE) => getAuthToken(state) != null;
export const getAuthUserID = (state: STATE_TYPE) => authSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = (state: STATE_TYPE) => authSelectors.getAuthExpiration(state.auth);
export const getAuthUsername = (state: STATE_TYPE) => authSelectors.getAuthUsername(state.auth);
export const getIsRefreshingToken = (state: STATE_TYPE) => authSelectors.getIsRefreshingToken(state.auth);
export const getRefreshingError = (state: STATE_TYPE) => authSelectors.getRefreshingError(state.auth);
