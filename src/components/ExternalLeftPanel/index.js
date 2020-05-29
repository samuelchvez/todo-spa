// @flow
import React from 'react';

import styles from './LoginLeftPanel.module.scss';

type ExternalLeftPanelPropTypes = {
  backgroundURL: string,
};

export default ({ backgroundURL }: ExternalLeftPanelPropTypes) => (
  <div
    className={styles.leftPanel}
    style={{ backgroundImage: `url(${backgroundURL})`, color: 'red' }}
  >
  </div>
)