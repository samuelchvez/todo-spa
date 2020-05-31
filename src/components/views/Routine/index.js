// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import styles from './Routine.module.scss';
import * as selectors from '../../../reducers';
import RoutinesSidebar from '../../RoutinesSidebar';
import RoutineSteps from '../../RoutineSteps';


type RoutineViewPropTypes = {
  isAuthenticated: boolean,
  match: {
    params: {
      routineId: string,
    },
  },
};

const RoutineView = ({
  isAuthenticated,
  match: {
    params: {
      routineId,
    },
  },
}: RoutineViewPropTypes) => (
  <div className={styles.routineContainer}>
    <RoutinesSidebar />
    <RoutineSteps routineId={routineId} />
    { !isAuthenticated && <Redirect to='/' /> }
  </div>
);


export default connect(
  (state, { match: { params: { routineId } } }) => ({
    isAuthenticated: selectors.isAuthenticated(state),
  }),
)(RoutineView);
