import * as React from 'react';
import { ClassMap } from '../../../types';

const styles = require('./AspectRatioWrapper.module.scss');

interface Props {
    aspectRatio?: '8:5' | '4:3' | '3:2' | '1:1';
    children?: any;
}

const classMap: ClassMap = {
    '8:5': styles['wrapper--8:5'],
    '4:3': styles['wrapper--4:3'],
    '3:2': styles['wrapper--3:2'],
    '1:1': styles['wrapper--1:1']
};

const AspectRatioWrapper = ({ aspectRatio, children }: Props) => (
    <div className={`${styles.wrapper} ${classMap[aspectRatio] || ''}`}>{children}</div>
);

export default AspectRatioWrapper;
