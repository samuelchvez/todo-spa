// @flow
import i18n from 'i18n-js';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

import * as selectors from '../../../reducers';
import LoginForm from '../../LoginForm';
import ExternalLeftPanel from '../../ExternalLeftPanel';
import ExternalHero from '../../ExternalHero';
import ExternalContainer from '../../ExternalContainer';


type LoginViewPropTypes = {
  isAuthenticated: boolean,
};

const LoginView = ({ isAuthenticated }: LoginViewPropTypes) => (
  <ExternalContainer>
    <h1>{i18n.t('mbn')}</h1>
    <ExternalHero>
      <ExternalLeftPanel backgroundURL={require('./baby.jpg')} />
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
