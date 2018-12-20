import React from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './AccordionContext';
import styled from '@emotion/styled';
import { SPACING, COLOURS, TYPE_SCALE } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired
};

const TitleButton = styled.button`
  align-items: center;
  background-color: ${COLOURS.primary};
  color: ${COLOURS.base};
  display: flex;
  font-size: ${TYPE_SCALE[16]};
  font-weight: 600;
  justify-content: space-between;
  line-height: 1.4;
  padding: ${SPACING.small};
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${COLOURS.accent};
    color: ${COLOURS.primary};
  }

  &:after {
    content: '+';
    font-size: ${TYPE_SCALE[24]};
    line-height: 1;
  }

  &[aria-expanded='true'] {
    &:after {
      content: '–';
    }
  }
`;

const AccordionItemTitle = ({ children }) => (
  <AccordionContext.Consumer>
    {({ expanded, onClick }) => (
      <h2 className="title">
        <TitleButton
          aria-expanded={expanded ? 'true' : 'false'}
          onClick={onClick}
        >
          {children}
        </TitleButton>
      </h2>
    )}
  </AccordionContext.Consumer>
);

AccordionItemTitle.propTypes = propTypes;

export default AccordionItemTitle;
