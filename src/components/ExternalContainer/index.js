// @flow
import * as React from 'react';

import styles from './ExternalContainer.module.scss';


type ExternalContainerPropTypes = {
  children?: React.Node,
};

const ExternalContainer = ({ children }: ExternalContainerPropTypes) => (
  <div className={styles.externalContainer}>
    { children }
  </div>
);


export default ExternalContainer;
