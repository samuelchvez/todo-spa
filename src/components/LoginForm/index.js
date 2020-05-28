// @flow
import i18n from 'i18n-js';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';

import * as selectors from '../../reducers';
import * as actions from '../../actions/auth';


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
        <form onSubmit={handleSubmit}>
          <Field
            name="username"
            placeholder={i18n.t('email')}
            component="input"
          />
          <Field
            type="password"
            name="password"
            placeholder={i18n.t('password')}
            component="input"
          />
          <button type="submit">
            { i18n.t('login') }
          </button>
        </form>
      )
    }
  >
  </Form>
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
