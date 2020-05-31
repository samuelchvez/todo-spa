// @flow
import type { ID_TYPE, ERROR_TYPE } from '../types/common';

import type {
  ROUTINE_STEP_TYPE,
  ADD_ROUTINE_STEP_STARTED_TYPE,
  ADD_ROUTINE_STEP_COMPLETED_TYPE,
  ADD_ROUTINE_STEP_FAILED_TYPE,
  ROUTINE_STEP_REMOVED_TYPE,
  ROUTINE_STEP_COMPLETED_TYPE,
  ROUTINE_STEP_CLEARED_TYPE,
  ROUTINE_STEP_UPDATED_TYPE,
} from '../types/routineSteps';
import * as types from '../types/routineSteps';


export const startAddRoutineStep = (routineStep: ROUTINE_STEP_TYPE): ADD_ROUTINE_STEP_STARTED_TYPE => ({
  type: types.ADD_ROUTINE_STEP_STARTED,
  payload: {
    ...routineStep,
    oldId: routineStep.id,
  },
});

export const completeAddRoutineStep = (
  routine: ID_TYPE,
  oldId: ID_TYPE,
  newId: ID_TYPE,
): ADD_ROUTINE_STEP_COMPLETED_TYPE => ({
  type: types.ADD_ROUTINE_STEP_COMPLETED,
  payload: {
    routine,
    oldId,
    newId,
  },
});

export const failAddRoutineStep = (error: ERROR_TYPE): ADD_ROUTINE_STEP_FAILED_TYPE => ({
  type: types.ADD_ROUTINE_STEP_FAILED,
  payload: error,
});

export const removeRoutineStep = (routine: ID_TYPE, oldId: ID_TYPE): ROUTINE_STEP_REMOVED_TYPE => ({
  type: types.ROUTINE_STEP_REMOVED,
  payload: {
    routine,
    oldId,
  },
});

export const completeRoutineStep = (id: ID_TYPE): ROUTINE_STEP_COMPLETED_TYPE => ({
  type: types.ROUTINE_STEP_COMPLETED,
  payload: {
    id,
    completed: true,
  },
});

export const clearRoutineStep = (id: ID_TYPE): ROUTINE_STEP_CLEARED_TYPE => ({
  type: types.ROUTINE_STEP_CLEARED,
  payload: {
    id,
    completed: false,
  },
});

export const updateRoutineStep = (id: ID_TYPE, attributes: Object): ROUTINE_STEP_UPDATED_TYPE => ({
  type: types.ROUTINE_STEP_UPDATED,
  payload: {
    id,
    ...attributes,
  },
});
