import { css } from '@emotion/core';
import * as theme from '../theme';

export default css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  h1 {
    font-size: ${theme.TYPE_SCALE[60]};
  }

  h2 {
    font-size: ${theme.TYPE_SCALE[48]};
  }

  h3 {
    font-size: ${theme.TYPE_SCALE[34]};
  }

  h4 {
    font-size: ${theme.TYPE_SCALE[24]};
  }

  h5 {
    font-size: ${theme.TYPE_SCALE[20]};
  }

  h6 {
    font-size: ${theme.TYPE_SCALE[16]};
  }
`;
