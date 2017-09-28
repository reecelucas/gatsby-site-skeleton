import * as React from 'react';
import { SpacerProps, ClassMap } from '../../../types';

const styles = require('./Spacer.module.scss');

const classMap: ClassMap = {
  tiny: styles['spacerTiny'],
  small: styles['spacerSmall'],
  large: styles['spacerLarge'],
  huge: styles['spacerHuge']
};

const Spacer = ({ children, size }: SpacerProps) => (
  <div className={classMap[size] || styles.spacer}>{children}</div>
);

export default Spacer;
