// @flow
import * as React from 'react';

import styles from './ExternalHero.module.scss';


type ExternalHeroPropTypes = {
  children?: React.Node,
};

const ExternalHero = ({ children }: ExternalHeroPropTypes) => (
  <div className={styles.externalHero}>
    { children }
  </div>
);


export default ExternalHero;
