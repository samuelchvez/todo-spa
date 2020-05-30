// @flow
import type { ID_TYPE, ERROR_TYPE } from './common';

export type ROUTINE_STEP_TYPE = {
  id: ID_TYPE,
  title: string,
  completed: boolean,
};

export type ADD_ROUTINE_STEP_STARTED_TYPE = {
  type: 'ADD_ROUTINE_STEP_STARTED',
  payload: ROUTINE_STEP_TYPE,
};
export const ADD_ROUTINE_STEP_STARTED = 'ADD_ROUTINE_STEP_STARTED';

export type ADD_ROUTINE_STEP_COMPLETED_TYPE = {
  type: 'ADD_ROUTINE_STEP_COMPLETED',
  payload: {
    oldId: ID_TYPE,
    newId: ID_TYPE,
  },
};
export const ADD_ROUTINE_STEP_COMPLETED = 'ADD_ROUTINE_STEP_COMPLETED';

export type ADD_ROUTINE_STEP_FAILED_TYPE = {
  type: 'ADD_ROUTINE_STEP_FAILED',
  payload: ERROR_TYPE,
};
export const ADD_ROUTINE_STEP_FAILED = 'ADD_ROUTINE_STEP_FAILED';

export type ROUTINE_STEP_REMOVED_TYPE = {
  type: 'ROUTINE_STEP_REMOVED',
  payload: {
    oldId: ID_TYPE,
  },
};
export const ROUTINE_STEP_REMOVED = 'ROUTINE_STEP_REMOVED';

export type ROUTINE_STEP_COMPLETED_TYPE = {
  type: 'ROUTINE_STEP_COMPLETED',
  payload: {
    id: ID_TYPE,
    completed: true,
  },
};
export const ROUTINE_STEP_COMPLETED = 'ROUTINE_STEP_COMPLETED';

export type ROUTINE_STEP_CLEARED_TYPE = {
  type: 'ROUTINE_STEP_CLEARED',
  payload: {
    id: ID_TYPE,
    completed: false,
  },
};
export const ROUTINE_STEP_CLEARED = 'ROUTINE_STEP_CLEARED';

export type ROUTINE_STEPS_ACTION_TYPE =
  | ADD_ROUTINE_STEP_STARTED_TYPE
  | ADD_ROUTINE_STEP_COMPLETED_TYPE
  | ADD_ROUTINE_STEP_FAILED_TYPE
  | ROUTINE_STEP_REMOVED_TYPE
  | ROUTINE_STEP_COMPLETED_TYPE
  | ROUTINE_STEP_CLEARED_TYPE;
