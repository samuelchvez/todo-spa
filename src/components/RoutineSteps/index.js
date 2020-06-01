// @flow
import _orderBy from 'lodash/orderBy';
import i18n from 'i18n-js';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import styles from './RoutineSteps.module.scss';
import type { ID_TYPE } from '../../types/common';
import type { ROUTINE_TYPE } from '../../types/routines';
import type { ROUTINE_STEP_TYPE } from '../../types/routineSteps';
import * as selectors from '../../reducers';
import * as actions from '../../actions/routines';
import { AddRoutineStepForm, EditRoutineStepForm } from '../RoutineStepForm';


type RoutineStepsPropTypes = {
  hasSteps: boolean,
  steps: Array<ROUTINE_STEP_TYPE>,
  isLoading: boolean,
  onLoad: Function,
  match: { params: { routineId: ID_TYPE } },
  routine: ROUTINE_TYPE,
};

const RoutineSteps = ({
  hasSteps,
  steps = [],
  isLoading,
  onLoad,
  match: { params: { routineId } },
  routine = {}
}: RoutineStepsPropTypes) => {
  useEffect(onLoad, [routineId]);
  const [orderBy, updateOrderBy] = useState('');
  return (
    <div
      className={`
        ${styles.routineStepsContainer}
        ${!hasSteps || isLoading ? styles.noSteps : ''}
      `}
    >
      <h1>
        { routine.title }
        <select
          className={styles.orderBy}
          onChange={e => updateOrderBy(e.target.value)}
          value={orderBy}
        >
          <option>
            { i18n.t('orderStepsBy') }
          </option>
          <option value="title">
            { i18n.t('title') }
          </option>
          <option value="priority">
            { i18n.t('kind') }
          </option>
          <option value="time">
            { i18n.t('time') }
          </option>
        </select>
      </h1>
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
            <div className={styles.loadingText}>
              { i18n.t('noSteps') }
            </div>
          </div>
        )
      }
      {
        hasSteps && !isLoading && (
          <div className={styles.list}>
            {
              _orderBy(steps, [orderBy]).map(step => (
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
    (state, { match: { params: { routineId } } }) => ({
      isAuthenticated: selectors.isAuthenticated(state),
      hasSteps: selectors.getRoutineSteps(state, routineId).length > 0,
      steps: selectors.getRoutineSteps(state, routineId),
      isLoading: selectors.isRoutineFetching(state, routineId),
      routine: selectors.getRoutine(state, routineId),
    }),
    (dispatch, { match: { params: { routineId } } }) => ({
      onLoad() {
        dispatch(actions.startFetchRoutines());
        dispatch(actions.startFetchRoutine(routineId));
      }
    }),
  )(RoutineSteps),
);
