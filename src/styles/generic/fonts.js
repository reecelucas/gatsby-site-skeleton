import { css } from '@emotion/core';

export default css`
  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
      url('/fonts/open-sans-regular.woff2') format('woff2'),
      url('/fonts/open-sans-regular.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
      url('/fonts/open-sans-700.woff2') format('woff2'),
      url('/fonts/open-sans-700.woff') format('woff');
  }
`;
