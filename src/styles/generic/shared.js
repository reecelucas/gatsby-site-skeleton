import { css } from '@emotion/core';
import * as theme from '../theme';

export default css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  p,
  address,
  table,
  fieldset,
  figure,
  pre {
    margin-bottom: ${theme.SPACING.base};
  }
`;
