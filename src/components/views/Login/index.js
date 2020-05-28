// @flow
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as selectors from '../../../reducers';
import LoginForm from '../../LoginForm';

import styles from './Login.scss';


type LoginViewPropTypes = {
  isAuthenticated: boolean,
  handleAuthenticated: boolean => void
};

const LoginView = ({ isAuthenticated }: LoginViewPropTypes) => {
  return (
    <div className={styles.login}>
      <LoginForm />
      { isAuthenticated && <Redirect to='/dashboard' /> }
      <div className={styles.loginRightPanel}>
      </div>
    </div>
  );
}


export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  }),
)(LoginView);
