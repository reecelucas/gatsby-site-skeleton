import * as React from 'react';
import * as classNames from 'classnames';

const styles = require('./Spacer.module.scss');

interface Props {
    children?: any;
    size?: 'tiny' | 'small' | 'large' | 'huge';
}

const Spacer = ({ children, size }: Props) => {
    const classList = classNames(styles.spacer, styles[`spacer--${size}`]);
    return <div className={classList}>{children}</div>;
};

export default Spacer;
