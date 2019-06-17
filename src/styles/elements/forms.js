import { css } from '@emotion/core';
import { COLOURS, SPACING, TYPE_SCALE } from '../theme';

export default css`
  input,
  textarea,
  select {
    appearance: none;
    background-color: ${COLOURS.base};
    border: 1px solid ${COLOURS.accent};
    border-radius: 2px;
    color: ${COLOURS.primary};
    display: block;
    font-family: inherit;
    font-size: ${TYPE_SCALE[16]};
    padding: ${SPACING.tiny};
    vertical-align: top;
    width: 100%;

    &:focus,
    &:focus {
      background-color: ${COLOURS.base};
    }
  }
`;
