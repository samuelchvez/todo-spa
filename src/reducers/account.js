// @flow
import { combineReducers } from 'redux';

import type { ERROR_TYPE } from '../types/common';
import * as common from './common-reducers';
import * as types from '../types/account';


export type AccountState = {
  isCreating: boolean,
  creationError: ?ERROR_TYPE,
};

const isCreating = common.isFetching({
  started: [types.ACCOUNT_CREATION_STARTED],
  succeed: [types.ACCOUNT_CREATION_COMPLETED],
  failed: [types.ACCOUNT_CREATION_FAILED],
});

const creationError = common.error({
  populate: [types.ACCOUNT_CREATION_FAILED],
  clear: [
    types.ACCOUNT_CREATION_STARTED,
    types.ACCOUNT_CREATION_COMPLETED,
  ],
});

const account = combineReducers({
  isCreating,
  creationError,
});


export default account;


export const getIsCreatingAccount = (state: AccountState): boolean => state.isCreating;
export const getCreationError = (state: AccountState): ?ERROR_TYPE => state.creationError;
