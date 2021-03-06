// @flow
import type { ID_TYPE, ERROR_TYPE } from './common';
import type { ROUTINE_STEP_TYPE } from './routineSteps';


export type ROUTINE_TYPE = {|
  id: ID_TYPE,
  title: string,
  isConfirmed: boolean,
|};

export type FETCH_ROUTINES_STARTED_TYPE = {
  type: 'FETCH_ROUTINES_STARTED',
};
export const FETCH_ROUTINES_STARTED = 'FETCH_ROUTINES_STARTED';

export type FETCH_ROUTINES_COMPLETED_TYPE = {
  type: 'FETCH_ROUTINES_COMPLETED',
  payload: {
    entities: {[ID_TYPE]: ROUTINE_TYPE},
    order: Array<ID_TYPE>,
  },
};
export const FETCH_ROUTINES_COMPLETED = 'FETCH_ROUTINES_COMPLETED';

export type FETCH_ROUTINES_FAILED_TYPE = {
  type: 'FETCH_ROUTINES_FAILED',
  payload: ERROR_TYPE,
};
export const FETCH_ROUTINES_FAILED = 'FETCH_ROUTINES_FAILED';

export type ADD_ROUTINE_STARTED_TYPE = {
  type: 'ADD_ROUTINE_STARTED',
  payload: {
    id: ID_TYPE,
    title: string,
  },
};
export const ADD_ROUTINE_STARTED = 'ADD_ROUTINE_STARTED';

export type ADD_ROUTINE_COMPLETED_TYPE = {
  type: 'ADD_ROUTINE_COMPLETED',
  payload: {
    oldId: ID_TYPE,
    newId: ID_TYPE,
  },
};
export const ADD_ROUTINE_COMPLETED = 'ADD_ROUTINE_COMPLETED';

export type ADD_ROUTINE_FAILED_TYPE = {
  type: 'ADD_ROUTINE_FAILED',
  payload: ERROR_TYPE,
};
export const ADD_ROUTINE_FAILED = 'ADD_ROUTINE_FAILED';

export type FETCH_ROUTINE_STARTED_TYPE = {
  type: 'FETCH_ROUTINE_STARTED',
  payload: { id: ID_TYPE },
};
export const FETCH_ROUTINE_STARTED = 'FETCH_ROUTINE_STARTED';

export type FETCH_ROUTINE_COMPLETED_TYPE = {
  type: 'FETCH_ROUTINE_COMPLETED',
  payload: {
    routine: ID_TYPE,
    entities: {[ID_TYPE]: ROUTINE_STEP_TYPE},
    order: Array<ID_TYPE>,
  },
};
export const FETCH_ROUTINE_COMPLETED = 'FETCH_ROUTINE_COMPLETED';

export type FETCH_ROUTINE_FAILED_TYPE = {
  type: 'FETCH_ROUTINE_FAILED',
  payload: ERROR_TYPE,
};
export const FETCH_ROUTINE_FAILED = 'FETCH_ROUTINE_FAILED';

export type ROUTINE_REMOVED_TYPE = {
  type: 'ROUTINE_REMOVED',
  payload: ID_TYPE,
};
export const ROUTINE_REMOVED = 'ROUTINE_REMOVED';

export type ROUTINE_RESET_TYPE = {
  type: 'ROUTINE_RESET',
  payload: {
    id: ID_TYPE,
    order: Array<ID_TYPE>,
  },
};
export const ROUTINE_RESET = 'ROUTINE_RESET';

export type ROUTINES_ACTION_TYPE =
  | FETCH_ROUTINES_STARTED_TYPE
  | FETCH_ROUTINES_COMPLETED_TYPE
  | FETCH_ROUTINES_FAILED_TYPE
  | ADD_ROUTINE_STARTED_TYPE
  | ADD_ROUTINE_COMPLETED_TYPE
  | ADD_ROUTINE_FAILED_TYPE
  | FETCH_ROUTINE_STARTED_TYPE
  | FETCH_ROUTINE_COMPLETED_TYPE
  | FETCH_ROUTINE_FAILED_TYPE
  | ROUTINE_REMOVED_TYPE
  | ROUTINE_RESET_TYPE;
