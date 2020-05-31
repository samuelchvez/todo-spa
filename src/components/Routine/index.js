// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './Routine.module.scss';
import type { ID_TYPE } from '../../types/common';
import * as actions from '../../actions/routines';


type RoutinePropTypes = {
  id: ID_TYPE,
  title: string,
  isConfirmed?: boolean,
  onRemove: Function,
};


const Routine = ({
  id,
  title,
  isConfirmed = false,
  onRemove,
}: RoutinePropTypes) => (
  !isConfirmed ? (
    <div
      className={`
        ${styles.routine}
        ${styles.disabled}
      `}
    >
      { title }
    </div>
  ) : (
    <NavLink
      to={`/dashboard/${id}`}
      className={styles.routine}
    >
      { title }
    </NavLink>
  )
);


export default connect(
  undefined,
  (dispatch, { id }) => ({
    onRemove() {
      dispatch(actions.removeRoutine(id));
    }
  }),
)(Routine);
