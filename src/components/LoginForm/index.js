// @flow
import i18n from 'i18n-js';
import React from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';

import styles from './LoginForm.module.scss';
import * as selectors from '../../reducers';
import * as actions from '../../actions/auth';
import ExternalInput from '../ExternalInput';
import ExternalButton from '../ExternalButton';


type LoginFormPropTypes = {
  onSubmit: Function,
  isLoading: boolean
};

const validate = (values) => {
  const errors = {};

  if (!values.username) { errors.username = i18n.t('required'); }

  if (!values.password) { errors.password = i18n.t('required'); }

  return errors;
};

const LoginForm = ({ onSubmit, isLoading = false }: LoginFormPropTypes) => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={
      ({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className={styles.loginForm}
        >
          <Field
            name="username"
            placeholder={i18n.t('username')}
            component={ExternalInput}
          />
          <Field
            type="password"
            name="password"
            placeholder={i18n.t('password')}
            component={ExternalInput}
          />
          <ExternalButton type="submit">
            { i18n.t('login') }
          </ExternalButton>
        </form>
      )
    }
  />
);


export default connect(
  state => ({
    isLoading: selectors.getIsAuthenticating(state),
  }),
  dispatch => ({
    onSubmit(values) {
      dispatch(actions.startLogin(values.username, values.password));
    },
  }),
)(LoginForm);
