import * as React from 'react';
import { GridProps, GridClassMap } from '../../../types';

const styles = require('./Grid.module.scss');

const gridClassMap: GridClassMap = {
  small: 'grid--@small',
  medium: 'grid--@medium',
  large: 'grid--@large'
};

const GridItem = ({ children }: any) => (
  <div className={styles.gridItem}>{children}</div>
);

const Grid = ({ children, columnCount, breakpoint }: GridProps) => {
  const columnModifier =
    columnCount > 1 ? `${styles[`grid--${columnCount}`]}` : '';
  const breakpointModifier = styles[gridClassMap[breakpoint]] || '';
  const className = `${styles.grid} ${columnModifier} ${breakpointModifier}`;

  return (
    <div className={className}>
      {children.map((child: any, i: number) => (
        <GridItem key={i}>{child}</GridItem>
      ))}
    </div>
  );
};

export default Grid;
