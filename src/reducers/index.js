// @flow
import { combineReducers } from 'redux';

import type { ID_TYPE, ERROR_TYPE } from '../types/common';

import type { AuthState } from './auth';
import auth, * as authSelectors from './auth';

import type { AccountState } from './account';
import account, * as accountSelectors from './account';


type STATE_TYPE = {
  auth: AuthState,
  account: AccountState,
};

export default combineReducers({
  auth,
  account,
});


export const getAuthToken = (state: STATE_TYPE): ?string => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = (state: STATE_TYPE): boolean => authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticationError = (state: STATE_TYPE): ?ERROR_TYPE => authSelectors.getAuthenticationError(state.auth);
export const isAuthenticated = (state: STATE_TYPE): boolean => getAuthToken(state) != null;
export const getAuthUserID = (state: STATE_TYPE): ?ID_TYPE => authSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = (state: STATE_TYPE): ?number => authSelectors.getAuthExpiration(state.auth);
export const getAuthUsername = (state: STATE_TYPE): ?string => authSelectors.getAuthUsername(state.auth);
export const getIsRefreshingToken = (state: STATE_TYPE): boolean => authSelectors.getIsRefreshingToken(state.auth);
export const getRefreshingError = (state: STATE_TYPE): ?ERROR_TYPE => authSelectors.getRefreshingError(state.auth);


export const getIsCreatingAccount = (state: STATE_TYPE): boolean => accountSelectors.getIsCreatingAccount(state.account);
export const getCreationError = (state: STATE_TYPE): ?ERROR_TYPE => accountSelectors.getCreationError(state.account);
