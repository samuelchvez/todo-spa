// @flow
import * as React from 'react';

import styles from './ExternalButton.module.scss';


type ExternalButtonPropTypes = {
  type: string,
  onClick?: Function,
  children?: React.Node,
  disabled?: boolean,
};

const ExternalButton = ({ type, onClick, children, disabled = false }: ExternalButtonPropTypes) => (
  <button
    className={styles.externalButton}
    type={type}
    onClick={onClick}
    disabled={disabled}
  >
    { children }
  </button>
);


export default ExternalButton;
