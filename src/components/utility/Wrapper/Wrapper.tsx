import * as React from 'react';
import * as classNames from 'classnames';

const styles = require('./Wrapper.module.scss');

interface Props {
    children: any;
    className?: string;
}

const Wrapper = ({ children, className }: Props) => (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
);

export default Wrapper;
