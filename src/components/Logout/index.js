// @flow
import i18n from 'i18n-js';
import React from 'react';
import { connect } from 'react-redux';

import styles from './Logout.module.scss';
import * as actions from '../../actions/auth';


type LogoutPropTypes = {
  onClick: Function,
};

const Logout = ({ onClick }: LogoutPropTypes) => (
  <button className={styles.logout} onClick={onClick}>
    { i18n.t('logout') }
  </button>
);


export default connect(
  undefined,
  dispatch => ({
    onClick() {
      dispatch(actions.logout());
    },
  }),
)(Logout);
