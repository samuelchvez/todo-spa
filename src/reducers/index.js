// @flow
import { combineReducers } from 'redux';

import type { ID_TYPE, ERROR_TYPE } from '../types/common';

import type { AuthState } from './auth';
import auth, * as authSelectors from './auth';

import type { AccountState } from './account';
import account, * as accountSelectors from './account';

import type { RoutinesState } from './routines';
import type { ROUTINE_TYPE } from '../types/routines';
import routines, * as fromRoutines from './routines';

import type { ROUTINE_STEP_TYPE } from '../types/routineSteps';
import type { RoutineStepsState } from './routineSteps';
import routineSteps, * as fromRoutineSteps from './routineSteps';


type STATE_TYPE = {
  auth: AuthState,
  account: AccountState,
  routines: RoutinesState,
  routineSteps: RoutineStepsState,
};

export default combineReducers({
  auth,
  account,
  routines,
  routineSteps,
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
export const getAccountCreationError = (state: STATE_TYPE): ?ERROR_TYPE => accountSelectors.getAccountCreationError(state.account);

export const getRoutine = (state: STATE_TYPE, id: ID_TYPE): ?ROUTINE_TYPE => fromRoutines.getRoutine(state.routines, id);
export const getRoutines = (state: STATE_TYPE): Array<?ROUTINE_TYPE> => fromRoutines.getRoutines(state.routines);
export const isRoutineFetching = (state: STATE_TYPE, id: ID_TYPE): boolean => fromRoutines.isRoutineFetching(state.routines, id);
export const isFetchingRoutines = (state: STATE_TYPE): boolean => fromRoutines.isFetchingRoutines(state.routines);
export const getRoutinesError = (state: STATE_TYPE): ERROR_TYPE => fromRoutines.getRoutinesError(state.routines);
export const getRoutineError = (state: STATE_TYPE, id: ID_TYPE): ERROR_TYPE => fromRoutines.getRoutineError(state.routines, id);

export const getRoutineStep = (state: STATE_TYPE, id: ID_TYPE): ?ROUTINE_STEP_TYPE => fromRoutineSteps.getRoutineStep(state.routineSteps, id);
export const getRoutineSteps = (state: STATE_TYPE, routine: ID_TYPE): Array<?ROUTINE_STEP_TYPE> => fromRoutineSteps.getRoutineSteps(state.routineSteps, routine);
