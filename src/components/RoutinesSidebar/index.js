// @flow
import i18n from 'i18n-js';
import React from 'react';
import { connect } from 'react-redux';
import { FaBabyCarriage } from 'react-icons/fa';

import styles from './RoutinesSidebar.module.scss';
import type { ROUTINE_TYPE } from '../../types/routines';
import * as selectors from '../../reducers';
import Routine from '../Routine';
import AddRoutineForm from '../AddRoutineForm';
import Logout from '../Logout';


type RoutinesSidebarPropTypes = {
  routines: Array<ROUTINE_TYPE>,
};


const RoutinesSidebar = ({ routines }: RoutinesSidebarPropTypes) => (
  <div className={styles.routinesSidebar}>
    <div className={styles.logo}>
      <FaBabyCarriage size={20} />
      { i18n.t('mbn') }
    </div>
    <div className={styles.routines}>
      {
        routines.map(
          routine => (
            <Routine key={routine.id} {...routine} />
          )
        )
      }
    </div>
    <AddRoutineForm />
    <Logout />
  </div>
);


export default connect(
  state => ({
    routines: selectors.getRoutines(state),
  }),
)(RoutinesSidebar);
