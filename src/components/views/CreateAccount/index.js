// @flow
import i18n from 'i18n-js';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { FaBabyCarriage } from 'react-icons/fa';

import * as selectors from '../../../reducers';
import CreateAccountForm from '../../CreateAccountForm';
import ExternalHero from '../../ExternalHero';
import ExternalContainer from '../../ExternalContainer';


type CreateAccountPropTypes = {
  isAuthenticated: boolean,
};

const CreateAccount = ({ isAuthenticated }: CreateAccountPropTypes) => (
  <ExternalContainer>
    <h1>
      <FaBabyCarriage />
      {i18n.t('mbn')}
    </h1>
    <ExternalHero>
      <CreateAccountForm />
    </ExternalHero>
    <NavLink to="/">
      { i18n.t('returnToLogin') }
    </NavLink>
    { isAuthenticated && <Redirect to='/dashboard' /> }
  </ExternalContainer>
);


export default connect(
  state => ({
    isAuthenticated: selectors.isAuthenticated(state),
  }),
)(CreateAccount);
