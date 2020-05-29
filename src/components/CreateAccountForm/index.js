// @flow
import i18n from 'i18n-js';
import emailValidator from 'email-validator';
import React from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';

import styles from './LoginForm.module.scss';
import * as selectors from '../../reducers';
import * as actions from '../../actions/account';
import ExternalInput from '../ExternalInput';
import ExternalButton from '../ExternalButton';


type CreateAccountPropTypes = {
  onSubmit: Function,
  isLoading: boolean
};

const validate = (values) => {
  const errors = {};

  if (!values.username) { errors.username = i18n.t('required'); }

  if (!values.firstName) { errors.firstName = i18n.t('required'); }

  if (!values.email) { errors.email = i18n.t('required'); }

  if (!values.password) { errors.password = i18n.t('required'); }

  if (!values.confirmPassword) { errors.confirmPassword = i18n.t('required'); }

  if (values.email && !emailValidator.validate(values.email)) {
    errors.email = i18n.t('invalidEmail');
  }

  if (values.password && values.password.length < 8) {
    errors.password = i18n.t('passwordTooShort');
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = i18n.t('passwordMissmatch');
  }

  return errors;
};

const CreateAccountForm = ({ onSubmit, isLoading = false }: CreateAccountPropTypes) => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={
      ({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className={styles.createAccountForm}
        >
          <Field
            name="firstName"
            placeholder={i18n.t('firstName')}
            component={ExternalInput}
          />
          <Field
            name="username"
            placeholder={i18n.t('username')}
            component={ExternalInput}
          />
          <Field
            name="email"
            placeholder={i18n.t('email')}
            component={ExternalInput}
          />
          <Field
            type="password"
            name="password"
            placeholder={i18n.t('password')}
            component={ExternalInput}
          />
          <Field
            type="password"
            name="confirmPassword"
            placeholder={i18n.t('confirmPassword')}
            component={ExternalInput}
          />
          <ExternalButton type="submit" disabled={isLoading}>
            { isLoading ? i18n.t('loading') : i18n.t('createAccount') }
          </ExternalButton>
        </form>
      )
    }
  />
);


export default connect(
  state => ({
    isLoading: selectors.getIsCreatingAccount(state),
  }),
  dispatch => ({
    onSubmit(values) {
      dispatch(
        actions.startCreatingAccount(
          values.firstName,
          values.username,
          values.email,
          values.password,
        ),
      );
    },
  }),
)(CreateAccountForm);
