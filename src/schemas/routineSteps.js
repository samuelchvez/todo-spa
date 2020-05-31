// @flow
import { schema } from 'normalizr';


export const routineStep = new schema.Entity('routineSteps');
export const arrayOfRoutineSteps = new schema.Array(routineStep);
