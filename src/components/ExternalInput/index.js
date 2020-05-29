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
    {
      meta.error && meta.touched && (
        <div className={styles.error}>
          { meta.error }
        </div>
      )
    }
    <input
      className={styles.externalInput}
      { ...input }
      placeholder={placeholder}
    />
  </>
);


export default ExternalInput;
