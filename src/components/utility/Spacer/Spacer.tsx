import * as React from 'react';
import { SpacerProps, SpacerClassMap } from '../../../types';

const styles = require('./Spacer.module.scss');

const spacerClassMap: SpacerClassMap = {
  tiny: 'spacerTiny',
  small: 'spacerSmall',
  large: 'spacerLarge',
  huge: 'spacerHuge'
};

const Spacer = ({ children, size }: SpacerProps) => (
  <div className={styles[spacerClassMap[size]] || styles.spacer}>
    {children}
  </div>
);

export default Spacer;
