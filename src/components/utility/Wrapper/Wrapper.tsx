import * as React from 'react';

const styles = require('./Wrapper.module.scss');

const Wrapper = ({ children }: any) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Wrapper;
