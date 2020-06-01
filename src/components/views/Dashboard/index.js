// @flow
import i18n from 'i18n-js';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import styles from './Dashboard.module.scss';
import type { ROUTINE_TYPE } from '../../../types/routines';
import * as selectors from '../../../reducers';
import * as actions from '../../../actions/routines';
import RoutinesSidebar from '../../RoutinesSidebar';


type DashboardViewPropTypes = {
  isAuthenticated: boolean,
  hasRoutines: boolean,
  routines: Array<ROUTINE_TYPE>,
  isLoading: boolean,
  onLoad: Function,
};

const DashboardView = ({
  isAuthenticated,
  hasRoutines,
  routines,
  isLoading,
  onLoad,
}: DashboardViewPropTypes) => {
  useEffect(onLoad, []);
  return (
    <div className={styles.dashboardContainer}>
      {
        isLoading && !hasRoutines && (
          <div className={styles.loadingRoutines}>
            { i18n.t('loadingRoutines') }
          </div>
        )
      }
      { !isLoading && <RoutinesSidebar /> }
      {
        !isLoading && !hasRoutines && (
          <div className={styles.loadingRoutines}>
            { i18n.t('noRoutines') }
          </div>
        )
      }
      { hasRoutines && <Redirect to={`/dashboard/${routines[0].id}`} /> }
      { !isAuthenticated && <Redirect to='/' /> }
    </div>
  );
}


export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
    hasRoutines: selectors.getRoutines(state).length > 0,
    routines: selectors.getRoutines(state),
    isLoading: selectors.isFetchingRoutines(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actions.startFetchRoutines());
    }
  }),
)(DashboardView);
