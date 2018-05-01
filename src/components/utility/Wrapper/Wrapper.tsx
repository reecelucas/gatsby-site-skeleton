import * as React from 'react';

const styles = require('./Wrapper.module.scss');

interface Props {
    children: any;
    className?: string;
}

const Wrapper = ({ children, className }: Props) => (
    <div className={`${styles.wrapper} ${className || ''}`}>{children}</div>
);

export default Wrapper;
