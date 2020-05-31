// @flow
import { v4 as uuidv4 } from 'uuid';
import i18n from 'i18n-js';
import React from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { FaPlus } from 'react-icons/fa';

import styles from './NoRoutines.module.scss';
import * as actions from '../../actions/routines';


type NoRoutinesPropTypes = {
  onSubmit: Function,
};

const validate = values => {
  const errors = {};

  if (!values.title) { errors.title = i18n.t('required'); }

  return errors;
};

const NoRoutines = ({ onSubmit }: NoRoutinesPropTypes) => (
  <div className={styles.noRoutines}>
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={
        ({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="title"
              placeholder={i18n.t('createYourFirstRoutine')}
              component="input"
              className={styles.noRoutinesInput}
              autoFocus
            />
            <button type="submit" className={styles.button}>
              <FaPlus />
            </button>
          </form>
        )
      }
    />
  </div>
);


export default connect(
  undefined,
  dispatch => ({
    onSubmit(values) {
      dispatch(actions.startAddRoutine(
        uuidv4(),
        values.title,
      ));
    },
  }),
)(NoRoutines)
