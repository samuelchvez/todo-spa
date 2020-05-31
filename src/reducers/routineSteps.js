//@flow
import { combineReducers } from 'redux';

import type { ID_TYPE } from '../types/common';
import type { ROUTINE_STEP_TYPE } from '../types/routineSteps';
import * as common from './common-reducers';
import * as types from '../types/routineSteps';
import * as routineTypes from '../types/routines';


export type RoutineStepsState = {
  byId: { [ID_TYPE]: ROUTINE_STEP_TYPE },
  orderByRoutine: {[ID_TYPE]: Array<ID_TYPE>},
};

const byId = common.byId({
  added: [types.ADD_ROUTINE_STEP_STARTED],
  updated: [
    types.ROUTINE_STEP_COMPLETED,
    types.ROUTINE_STEP_CLEARED,
  ],
  updatedInBulk: [routineTypes.ROUTINE_RESET],
  fetched: [routineTypes.FETCH_ROUTINE_COMPLETED],
  removed: [types.ROUTINE_STEP_REMOVED],
  confirmed: [types.ADD_ROUTINE_STEP_COMPLETED],
});

const orderByRoutine = common.orderById({
  fetched: [routineTypes.FETCH_ROUTINE_COMPLETED],
  changed: [types.ADD_ROUTINE_STEP_COMPLETED],
  removed: [types.ROUTINE_STEP_REMOVED],
  elementKey: 'oldId',
  newElementKey: 'newId',
})

const routineSteps = combineReducers({
  byId,
  orderByRoutine,
});


export default routineSteps;


// Selectors
export const getRoutineStep = (state: RoutineStepsState, id: ID_TYPE): ?ROUTINE_STEP_TYPE => state.byId[id];
export const getRoutineSteps = (state: RoutineStepsState, routine: ID_TYPE): Array<?ROUTINE_STEP_TYPE> => state.orderByRoutine[routine].map(i => getRoutineStep(state, i));
