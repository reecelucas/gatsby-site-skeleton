import { css } from '@emotion/core';

/**
 * As well as using normalize.css, it is often advantageous to
 * remove all margins from certain elements.
 */
export default css`
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  dl,
  dd,
  ol,
  ul,
  form,
  fieldset,
  legend,
  figure,
  table,
  th,
  td,
  caption,
  hr {
    margin: 0;
    padding: 0;
  }

  abbr[title],
  dfn[title] {
    cursor: help;
  }

  u,
  ins {
    text-decoration: none;
  }

  ins {
    border-bottom: 1px solid;
  }

  ul,
  ol,
  dl {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a[href^='http']:empty:before {
    content: attr(href);
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-align: left;
  }
`;
