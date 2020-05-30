// @flow
import type { ID_TYPE, ERROR_TYPE } from '../types/common';

import type { ROUTINE_STEP_TYPE } from '../types/routineSteps';
import type {
  ROUTINE_TYPE,
  FETCH_ROUTINES_STARTED_TYPE,
  FETCH_ROUTINES_COMPLETED_TYPE,
  FETCH_ROUTINES_FAILED_TYPE,
  ADD_ROUTINE_STARTED_TYPE,
  ADD_ROUTINE_COMPLETED_TYPE,
  ADD_ROUTINE_FAILED_TYPE,
  FETCH_ROUTINE_STARTED_TYPE,
  FETCH_ROUTINE_COMPLETED_TYPE,
  FETCH_ROUTINE_FAILED_TYPE,
  ROUTINE_REMOVED_TYPE,
  ROUTINE_RESET_TYPE,
} from '../types/routines';
import * as types from '../types/routines';


export const startFetchRoutines = (): FETCH_ROUTINES_STARTED_TYPE => ({
  type: types.FETCH_ROUTINES_STARTED,
});

export const completeFetchRoutines = (
  entities: {[ID_TYPE]: ROUTINE_TYPE},
  order: Array<ID_TYPE>,
): FETCH_ROUTINES_COMPLETED_TYPE => ({
  type: types.FETCH_ROUTINES_COMPLETED,
  payload: {
    entities,
    order,
  },
});

export const failFetchRoutines = (error: ERROR_TYPE): FETCH_ROUTINES_FAILED_TYPE => ({
  type: types.FETCH_ROUTINES_FAILED,
  payload: error,
});

export const startAddRoutine = (id: ID_TYPE, title: string): ADD_ROUTINE_STARTED_TYPE => ({
  type: types.ADD_ROUTINE_STARTED,
  payload: {
    id,
    title,
  },
});

export const completeAddRoutine = (oldId: ID_TYPE, newId: ID_TYPE): ADD_ROUTINE_COMPLETED_TYPE => ({
  type: types.ADD_ROUTINE_COMPLETED,
  payload: {
    oldId,
    newId,
  },
});

export const failAddRoutine = (error: ERROR_TYPE): ADD_ROUTINE_FAILED_TYPE => ({
  type: types.ADD_ROUTINE_FAILED,
  payload: error,
});

export const startFetchRoutine = (id: ID_TYPE): FETCH_ROUTINE_STARTED_TYPE => ({
  type: types.FETCH_ROUTINE_STARTED,
  payload: { id },
});

export const completeFetchRoutine = (
  entities: {[ID_TYPE]: ROUTINE_STEP_TYPE},
  order: Array<ID_TYPE>,
): FETCH_ROUTINE_COMPLETED_TYPE => ({
  type: types.FETCH_ROUTINE_COMPLETED,
  payload: {
    entities,
    order,
  },
});

export const failFetchRoutine = (error: ERROR_TYPE): FETCH_ROUTINE_FAILED_TYPE => ({
  type: types.FETCH_ROUTINE_FAILED,
  payload: error,
});

export const removeRoutine = (id: ID_TYPE): ROUTINE_REMOVED_TYPE => ({
  type: types.ROUTINE_REMOVED,
  payload: id,
});

export const resetRoutine = (id: ID_TYPE, order: Array<ID_TYPE>): ROUTINE_RESET_TYPE => ({
  type: types.ROUTINE_RESET,
  payload: {
    id,
    order,
    completed: false,
  },
});
