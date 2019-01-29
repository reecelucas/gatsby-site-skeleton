import { css } from '@emotion/core';
import * as theme from '../theme';

export default css`
  html {
    color: ${theme.COLOURS.primary};
    font-family: ${theme.FONT_FAMILIES.fallback};
    font-size: ${theme.TYPE_SCALE[16]};
    line-height: 1.6;
    letter-spacing: 0.025em;
    min-height: 100%;
    overflow-y: scroll;

    &.fonts-loaded {
      font-family: ${theme.FONT_FAMILIES.primary};
      letter-spacing: initial;
    }
  }

  body {
    background-color: ${theme.COLOURS.base};
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
