// @flow
import React from 'react';

import styles from './ExternalInput.module.scss';


type ExternalInputPropTypes = {
  input: {|
    type: string,
    name: string,
  |},
  placeholder: string,
  meta: {|
    error?: string,
    touched?: boolean,
  |},
};

const ExternalInput = ({ input, placeholder, meta }: ExternalInputPropTypes) => (
  <>
    <div className={styles.error}>
      {
        meta.error && meta.touched && (
          <span>{ meta.error }</span>
        )
      }
    </div>
    <input
      className={styles.externalInput}
      { ...input }
      placeholder={placeholder}
    />
  </>
);


export default ExternalInput;
