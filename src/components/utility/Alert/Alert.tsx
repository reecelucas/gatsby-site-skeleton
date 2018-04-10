import * as React from 'react';
import { ClassMap } from '../../../types';

const styles = require('./Alert.module.scss');

interface Props {
    message: string;
    theme: 'success' | 'warning' | 'error';
}

const classMap: ClassMap = {
    success: styles['alert--success'],
    warning: styles['alert--warning'],
    error: styles['alert--error']
};

const Alert = ({ message, theme }: Props) => (
    <div className={`${styles.alert} ${classMap[theme]}`} role="alert" aria-live="assertive">
        {message}
    </div>
);

export default Alert;
