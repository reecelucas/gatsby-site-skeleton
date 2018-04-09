import * as React from 'react';
import { ClassMap } from '../../../types';

const styles = require('./Spacer.module.scss');

interface Props {
    children?: any;
    size?: 'tiny' | 'small' | 'large' | 'huge';
}

const classMap: ClassMap = {
    tiny: styles['spacerTiny'],
    small: styles['spacerSmall'],
    large: styles['spacerLarge'],
    huge: styles['spacerHuge']
};

const Spacer = ({ children, size }: Props) => (
    <div className={classMap[size] || styles.spacer}>{children}</div>
);

export default Spacer;
