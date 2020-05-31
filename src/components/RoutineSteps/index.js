// @flow
import i18n from 'i18n-js';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './RoutineSteps.module.scss';
import type { ROUTINE_STEP_TYPE } from '../../types/routineSteps';
import * as selectors from '../../reducers';
import * as actions from '../../actions/routines';
import { AddRoutineStepForm, EditRoutineStepForm } from '../RoutineStepForm';


type RoutineStepsPropTypes = {
  hasSteps: boolean,
  steps: Array<ROUTINE_STEP_TYPE>,
  isLoading: boolean,
  onLoad: Function,
};

const RoutineSteps = ({
  hasSteps,
  steps = [],
  isLoading,
  onLoad,
}: RoutineStepsPropTypes) => {
  useEffect(onLoad, []);
  return (
    <div
      className={`
        ${styles.routineStepsContainer}
        ${!hasSteps ? styles.noSteps : ''}
      `}
    >
      {
        isLoading && (
          <div className={styles.loadingSteps}>
            { i18n.t('loadingRoutineSteps') }
          </div>
        )
      }
      {
        !hasSteps && !isLoading && (
          <div className={styles.loadingSteps}>
            { i18n.t('noSteps') }
          </div>
        )
      }
      {
        hasSteps && (
          <div className={styles.list}>
            {
              steps.map(step => (
                <EditRoutineStepForm
                  key={step.id}
                  initialValues={step}
                  isConfirmed={step.isConfirmed}
                  id={step.id}
                  toEdit
                />
              ))
            }
          </div>
        )
      }
      {
        (!isLoading || hasSteps) && (
          <AddRoutineStepForm isConfirmed />
        )
      }
    </div>
  );
}


export default withRouter(
  connect(
    (state, { match: { params: { routineId } } }) => {
      console.log("steps", selectors.getRoutineSteps(state, routineId))
      return ({
      isAuthenticated: selectors.isAuthenticated(state),
      hasSteps: selectors.getRoutineSteps(state, routineId).length > 0,
      steps: selectors.getRoutineSteps(state, routineId),
      isLoading: selectors.isRoutineFetching(state, routineId),
    })
    },
    (dispatch, { match: { params: { routineId } } }) => ({
      onLoad() {
        dispatch(actions.startFetchRoutines());
        dispatch(actions.startFetchRoutine(routineId));
      }
    }),
  )(RoutineSteps),
);
