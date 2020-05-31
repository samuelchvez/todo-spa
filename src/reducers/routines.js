//@flow
import { combineReducers } from 'redux';

import type { ID_TYPE, ERROR_TYPE } from '../types/common';
import type { ROUTINE_TYPE } from '../types/routines';
import * as common from './common-reducers';
import * as types from '../types/routines';


export type RoutinesState = {
  byId: { [ID_TYPE]: ROUTINE_TYPE },
  order: Array<ID_TYPE>,
  fetching: Array<ID_TYPE>,
  isFetching: boolean,
  error: ERROR_TYPE,
  errors: { [ID_TYPE]: ERROR_TYPE },
};

const byId = common.byId({
  added: [types.ADD_ROUTINE_STARTED],
  fetched: [types.FETCH_ROUTINES_COMPLETED],
  removed: [types.ROUTINE_REMOVED],
  confirmed: [types.ADD_ROUTINE_COMPLETED],
  defaultAttributes: { isConfirmed: false },
});

const order = common.order({
  added: [types.ADD_ROUTINE_STARTED],
  fetched: [types.FETCH_ROUTINES_COMPLETED],
  removed: [types.ROUTINE_REMOVED],
  confirmed: [types.ADD_ROUTINE_COMPLETED],
});

const fetching = common.fetching({
  started: [types.FETCH_ROUTINE_STARTED],
  succeed: [types.FETCH_ROUTINE_COMPLETED],
  failed: [types.FETCH_ROUTINE_FAILED],
});

const isFetching = common.isFetching({
  started: [types.FETCH_ROUTINES_STARTED],
  succeed: [types.FETCH_ROUTINES_COMPLETED],
  failed: [types.FETCH_ROUTINES_FAILED],
});

const error = common.error({
  clear: [
    types.FETCH_ROUTINES_STARTED,
    types.FETCH_ROUTINES_COMPLETED,
  ],
  populate: [types.FETCH_ROUTINES_FAILED],
});

const errors = common.errors({
  clear: [
    types.FETCH_ROUTINE_STARTED,
    types.FETCH_ROUTINE_COMPLETED,
  ],
  populate: [types.FETCH_ROUTINE_FAILED],
});


const routines = combineReducers({
  byId,
  order,
  fetching,
  isFetching,
  error,
  errors,
});


export default routines;


// Selectors
export const getRoutine = (state: RoutinesState, id: ID_TYPE): ?ROUTINE_TYPE => state.byId[id];
export const getRoutines = (state: RoutinesState): Array<?ROUTINE_TYPE> => state.order.map(i => getRoutine(state, i));
export const isRoutineFetching = (state: RoutinesState, id: ID_TYPE): boolean => state.fetching.includes(id);
export const isFetchingRoutines = (state: RoutinesState): boolean => state.isFetching;
export const getRoutinesError = (state: RoutinesState): ERROR_TYPE => state.error;
export const getRoutineError = (state: RoutinesState, id: ID_TYPE): ERROR_TYPE => state.errors[id];
