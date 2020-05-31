// @flow
import { schema } from 'normalizr';


export const routine = new schema.Entity('routines');
export const arrayOfRoutines = new schema.Array(routine);
