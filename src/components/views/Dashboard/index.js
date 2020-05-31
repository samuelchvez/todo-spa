// @flow
import i18n from 'i18n-js';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

import styles from './Dashboard.module.scss';
import * as selectors from '../../../reducers';
import * as actions from '../../../actions/routines';
import NoRoutines from '../../NoRoutines';
import RoutinesSidebar from '../../RoutinesSidebar';


type DashboardViewPropTypes = {
  isAuthenticated: boolean,
  hasRoutines: boolean,
  isLoading: boolean,
  onLoad: Function,
};

const DashboardView = ({
  isAuthenticated,
  hasRoutines,
  isLoading,
  onLoad,
}: DashboardViewPropTypes) => {
  useEffect(onLoad, []);
  return (
    <div
      className={`
        ${styles.dashboardContainer}
        ${!hasRoutines ? styles.noRoutines : ''}
      `}
    >
      {
        isLoading && !hasRoutines && (
          <div className={styles.loadingRoutines}>
            { i18n.t('loadingRoutines') }
          </div>
        )
      }
      { !hasRoutines && !isLoading && <NoRoutines /> }
      { hasRoutines && <RoutinesSidebar /> }
      { !isAuthenticated && <Redirect to='/' /> }
    </div>
  );
}


export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
    hasRoutines: selectors.getRoutines(state).length > 0,
    isLoading: selectors.isFetchingRoutines(state),
  }),
  dispatch => ({
    onLoad() {
      dispatch(actions.startFetchRoutines());
    }
  }),
)(DashboardView);
