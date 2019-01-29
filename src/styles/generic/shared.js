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

  body:not(.user-is-tabbing) a:focus,
  body:not(.user-is-tabbing) button:focus,
  body:not(.user-is-tabbing) input:focus,
  body:not(.user-is-tabbing) select:focus,
  body:not(.user-is-tabbing) textarea:focus {
    outline: none;
  }
`;
