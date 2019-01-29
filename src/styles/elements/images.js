import { css } from '@emotion/core';

export default css`
  img {
    height: auto;
    font-style: italic;
    max-width: 100%;
    vertical-align: middle;
  }

  img[width],
  img[height] {
    max-width: none;
  }
`;
