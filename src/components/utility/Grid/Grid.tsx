import * as React from 'react';
import * as classNames from 'classnames';

const styles = require('./Grid.module.scss');

interface Props {
    children?: any;
    columnCount?: number;
    breakpoint?: 'small' | 'medium' | 'large';
}

const GridItem = ({ children }: any) => <div className={styles.gridItem}>{children}</div>;

const Grid = ({ children, columnCount, breakpoint }: Props) => {
    const classList = classNames(
        styles.grid,
        styles[`grid--${columnCount}`],
        styles[`grid--@${breakpoint}`]
    );

    return (
        <div className={classList}>
            {children.map((child: any, i: number) => <GridItem key={i}>{child}</GridItem>)}
        </div>
    );
};

export default Grid;
