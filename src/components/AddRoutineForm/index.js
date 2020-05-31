// @flow
import { v4 as uuidv4 } from 'uuid';
import i18n from 'i18n-js';
import React from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { FaPlus } from 'react-icons/fa';

import styles from './AddRoutineForm.module.scss';
import * as actions from '../../actions/routines';


const validate = values => {
  const errors = {};

  if (!values.title) { errors.title = i18n.t('required'); }

  return errors;
};

const AddRoutineForm = ({ onSubmit }) => (
  <div className={styles.addRoutineForm}>
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={
        ({ handleSubmit, form }) => (
          <form
            onSubmit={
              (...props) => {
                handleSubmit(...props);
                form.reset();
              }
            }
          >
            <Field
              name="title"
              placeholder={i18n.t('newRoutine')}
              component="input"
              className={styles.newRoutineInput}
            />
            <button type="submit" className={styles.button}>
              <FaPlus size="10" />
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
)(AddRoutineForm)
