import { css } from '@emotion/core';

/**
 * Set the global `box-sizing` state to `border-box`.
 *
 * css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice
 * paulirish.com/2012/box-sizing-border-box-ftw.
 */
export default css`
  html {
    box-sizing: border-box;
  }

  * {
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
`;
