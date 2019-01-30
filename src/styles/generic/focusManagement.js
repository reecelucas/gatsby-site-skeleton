import { css } from '@emotion/core';

export default css`
  *:focus {
    outline: 2px solid #7aacfe;
    outline: 5px auto -webkit-focus-ring-color;
  }

  body:not(.user-is-tabbing) *:focus {
    outline: none;
  }
`;
