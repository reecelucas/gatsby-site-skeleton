import React from 'react';
import styled from '@emotion/styled';
import Anchor from '../Anchor/Anchor';
import { COLOURS, SPACING, TYPE_SCALE, Z_INDEXES } from '../../styles/theme';

const transitionTiming = 'cubic-bezier(0.18, 0.89, 0.32, 1.28)';
const borderRadius = '8px';

const StyledLink = styled(Anchor)`
  clip: rect(1px, 1px, 1px, 1px);
  font-size: ${TYPE_SCALE[16]};
  font-weight: 700;
  height: 1px;
  overflow: hidden;
  outline: none !important;
  padding-top: ${SPACING.tiny};
  padding-bottom: ${SPACING.tiny};
  position: absolute;
  top: 0;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -100%);
  transition: transform 0.4s ${transitionTiming};
  white-space: nowrap;
  width: 1px;

  &:focus {
    background-color: ${COLOURS.primary};
    border-bottom-right-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
    clip: auto;
    color: ${COLOURS.base};
    height: auto;
    overflow: visible;
    position: fixed;
    transform: translate(-50%, -4px);
    white-space: normal;
    width: 200px;
    z-index: ${Z_INDEXES.skipLink};
  }
`;

const SkipLink = () => (
  <StyledLink href="#content" id="link-skip-to-content">
    Skip to content
  </StyledLink>
);

export default SkipLink;
