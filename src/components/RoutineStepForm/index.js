// @flow
import { v4 as uuidv4 } from 'uuid';
import i18n from 'i18n-js';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Form, Field } from 'react-final-form';
import { FaPlus, FaTimes, FaCheck } from 'react-icons/fa';

import styles from './RoutineStepForm.module.scss';
import type { ID_TYPE } from '../../types/common';
import * as actions from '../../actions/routineSteps';


type RoutineStepFormPropTypes = {
  id?: ID_TYPE,
  onSubmit: Function,
  onButtonClick?: Function,
  toEdit?: boolean,
  initialValues?: Object,
  isConfirmed?: boolean,
};

const validate = values => {
  const errors = {};

  if (!values.title) { errors.title = i18n.t('required'); }
  if (!values.priority) { errors.priority = i18n.t('required'); }
  if (!values.time) { errors.time = i18n.t('required'); }

  return errors;
};

const DEFAULT_INITIAL_VALUES = { priority: 1, time: '900' };

const RoutineStepForm = ({
  id,
  onSubmit,
  toEdit = false,
  onButtonClick,
  initialValues = DEFAULT_INITIAL_VALUES,
  isConfirmed = false,
}: RoutineStepFormPropTypes) => (
  <div
    className={`
      ${styles.routineStepForm}
      ${toEdit ? styles.toEdit : ''}
      ${isConfirmed ? styles.isConfirmed : ''}
    `}>
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialValues}
      render={
        ({ handleSubmit, form }) => (
          <form
            onSubmit={
              (...props) => {
                handleSubmit(...props);
                !toEdit && form.reset(DEFAULT_INITIAL_VALUES);
              }
            }
          >
            <Field
              name="title"
              placeholder={i18n.t('title')}
              component="input"
              className={styles.routineStepInput}
            />
            <Field
              name="priority"
              component="select"
              placeholder={i18n.t('priority')}
            >
              <option />
              <option value="1">
                { i18n.t('sleep') }
              </option>
              <option value="2">
                { i18n.t('breast') }
              </option>
              <option value="3">
                { i18n.t('bottle') }
              </option>
              <option value="4">
                { i18n.t('entretainment') }
              </option>
              <option value="5">
                { i18n.t('diaper') }
              </option>
            </Field>
            <Field
              name="time"
              component="select"
              placeholder={i18n.t('timeOfDay')}
            >
              <option />
              <option value="100">
                1:00
              </option>
              <option value="115">
                1:15
              </option>
              <option value="130">
                1:30
              </option>
              <option value="145">
                1:45
              </option>
              <option value="200">
                2:00
              </option>
              <option value="215">
                2:15
              </option>
              <option value="230">
                2:30
              </option>
              <option value="245">
                2:45
              </option>
              <option value="300">
                3:00
              </option>
              <option value="315">
                3:15
              </option>
              <option value="330">
                3:30
              </option>
              <option value="345">
                3:45
              </option>
              <option value="400">
                4:00
              </option>
              <option value="415">
                4:15
              </option>
              <option value="430">
                4:30
              </option>
              <option value="445">
                4:45
              </option>
              <option value="500">
                5:00
              </option>
              <option value="515">
                5:15
              </option>
              <option value="530">
                5:30
              </option>
              <option value="545">
                5:45
              </option>
              <option value="600">
                6:00
              </option>
              <option value="615">
                6:15
              </option>
              <option value="630">
                6:30
              </option>
              <option value="645">
                6:45
              </option>
              <option value="700">
                7:00
              </option>
              <option value="715">
                7:15
              </option>
              <option value="730">
                7:30
              </option>
              <option value="745">
                7:45
              </option>
              <option value="800">
                8:00
              </option>
              <option value="815">
                8:15
              </option>
              <option value="830">
                8:30
              </option>
              <option value="845">
                8:45
              </option>
              <option value="900">
                9:00
              </option>
              <option value="915">
                9:15
              </option>
              <option value="930">
                9:30
              </option>
              <option value="945">
                9:45
              </option>
              <option value="1000">
                10:00
              </option>
              <option value="1015">
                10:15
              </option>
              <option value="1030">
                10:30
              </option>
              <option value="1045">
                10:45
              </option>
              <option value="1100">
                11:00
              </option>
              <option value="1115">
                11:15
              </option>
              <option value="1130">
                11:30
              </option>
              <option value="1145">
                11:45
              </option>
              <option value="1200">
                12:00
              </option>
              <option value="1215">
                12:15
              </option>
              <option value="1230">
                12:30
              </option>
              <option value="1245">
                12:45
              </option>
              <option value="1300">
                13:00
              </option>
              <option value="1315">
                13:15
              </option>
              <option value="1330">
                13:30
              </option>
              <option value="1345">
                13:45
              </option>
              <option value="1400">
                14:00
              </option>
              <option value="1415">
                14:15
              </option>
              <option value="1430">
                14:30
              </option>
              <option value="1445">
                14:45
              </option>
              <option value="1500">
                15:00
              </option>
              <option value="1515">
                15:15
              </option>
              <option value="1530">
                15:30
              </option>
              <option value="1545">
                15:45
              </option>
              <option value="1600">
                16:00
              </option>
              <option value="1615">
                16:15
              </option>
              <option value="1630">
                16:30
              </option>
              <option value="1645">
                16:45
              </option>
              <option value="1700">
                17:00
              </option>
              <option value="1715">
                17:15
              </option>
              <option value="1730">
                17:30
              </option>
              <option value="1745">
                17:45
              </option>
              <option value="1800">
                18:00
              </option>
              <option value="1815">
                18:15
              </option>
              <option value="1830">
                18:30
              </option>
              <option value="1845">
                18:45
              </option>
              <option value="1900">
                19:00
              </option>
              <option value="1915">
                19:15
              </option>
              <option value="1930">
                19:30
              </option>
              <option value="1945">
                19:45
              </option>
              <option value="2000">
                20:00
              </option>
              <option value="2015">
                20:15
              </option>
              <option value="2030">
                20:30
              </option>
              <option value="2045">
                20:45
              </option>
              <option value="2100">
                21:00
              </option>
              <option value="2115">
                21:15
              </option>
              <option value="2130">
                21:30
              </option>
              <option value="2145">
                21:45
              </option>
              <option value="2200">
                22:00
              </option>
              <option value="2215">
                22:15
              </option>
              <option value="2230">
                22:30
              </option>
              <option value="2245">
                22:45
              </option>
              <option value="2300">
                23:00
              </option>
              <option value="2315">
                23:15
              </option>
              <option value="2330">
                23:30
              </option>
              <option value="2345">
                23:45
              </option>
            </Field>
            {
              toEdit ? (
                <>
                  <button
                    type="submit"
                    className={`
                      ${styles.button}
                      ${styles.saveButton}
                    `}
                  >
                    <FaCheck size="16" />
                  </button>
                  <button
                    className={`
                      ${styles.button}
                      ${styles.removeButton}
                    `}
                    onClick={
                      e => {
                        e.preventDefault();
                        onButtonClick && onButtonClick(id);
                      }
                    }
                  >
                    <FaTimes size="16" />
                  </button>
                </>
              ) : (
                <button type="submit" className={styles.button}>
                  <FaPlus size="16" />
                </button>
              )
            }
          </form>
        )
      }
    />
  </div>
);


export const AddRoutineStepForm = withRouter(
  connect(
    undefined,
    (dispatch, { match: { params: { routineId } } }) => ({
      onSubmit(values) {
        dispatch(actions.startAddRoutineStep({
          id: uuidv4(),
          routine: routineId,
          title: values.title,
          priority: values.priority,
          time: values.time,
          completed: false,
        }));
      },
    }),
  )(RoutineStepForm),
);

export const EditRoutineStepForm = withRouter(
  connect(
    undefined,
    (dispatch, { id, match: { params: { routineId } } }) => ({
      onSubmit(values) {
        dispatch(actions.updateRoutineStep(id, values));
      },
      onButtonClick(id) {
        dispatch(actions.removeRoutineStep(routineId, id));
      }
    }),
  )(RoutineStepForm),
);
