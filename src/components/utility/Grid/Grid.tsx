import * as React from 'react';
import { GridProps, ClassMap } from '../../../types';

const styles = require('./Grid.module.scss');

const classMap: ClassMap = {
  small: styles['grid--@small'],
  medium: styles['grid--@medium'],
  large: styles['grid--@large']
};

const GridItem = ({ children }: any) => (
  <div className={styles.gridItem}>{children}</div>
);

const Grid = ({ children, columnCount, breakpoint }: GridProps) => {
  const columnModifier = columnCount > 1 ? styles[`grid--${columnCount}`] : '';
  const breakpointModifier = classMap[breakpoint] || '';
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
