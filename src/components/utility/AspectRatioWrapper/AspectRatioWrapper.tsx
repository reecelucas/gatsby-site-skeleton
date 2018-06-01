import * as React from 'react';
import * as classNames from 'classnames';

const styles = require('./AspectRatioWrapper.module.scss');

interface Props {
    aspectRatio?: '8:5' | '4:3' | '3:2' | '1:1';
    children?: any;
}

const AspectRatioWrapper = ({ aspectRatio, children }: Props) => {
    const classList = classNames(styles.wrapper, styles[`wrapper--${aspectRatio}`]);
    return <div className={classList}>{children}</div>;
};

export default AspectRatioWrapper;
