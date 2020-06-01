// @flow
import i18n from 'i18n-js';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { FaBabyCarriage } from 'react-icons/fa';

import * as selectors from '../../../reducers';
import LoginForm from '../../LoginForm';
import ExternalHero from '../../ExternalHero';
import ExternalContainer from '../../ExternalContainer';


type LoginViewPropTypes = {
  isAuthenticated: boolean,
};

const LoginView = ({ isAuthenticated }: LoginViewPropTypes) => (
  <ExternalContainer>
    <h1>
      <FaBabyCarriage />
      {i18n.t('mbn')}
    </h1>
    <ExternalHero>
      <LoginForm />
    </ExternalHero>
    <NavLink to="/create-account">
      { i18n.t('createAccount') }
    </NavLink>
    { isAuthenticated && <Redirect to='/dashboard' /> }
  </ExternalContainer>
);


export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  }),
)(LoginView);
