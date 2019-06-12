import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import AccordionItemContext from './AccordionItemContext';
import getHtmlAttributes from '../../helpers/getHtmlAttributes';
import { SPACING, COLOURS, TYPE_SCALE } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string
};

// Hide default summary marker (arrow)
const Wrapper = styled.summary`
  &::-webkit-details-marker {
    display: none;
  }
`;

// An inner `div` is necessary because `flex` is buggy on `summary` elements
const Inner = styled.div`
  align-items: center;
  background-color: ${COLOURS.primary};
  color: ${COLOURS.base};
  display: flex;
  justify-content: space-between;
  padding: ${SPACING.small};
`;

const Title = styled.h2`
  font-size: ${TYPE_SCALE[16]};
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0;
  padding-right: ${SPACING.small};
`;

const Icon = styled.span`
  display: inline-block;
  font-size: ${TYPE_SCALE[24]};
  line-height: 1;
  margin-left: auto;
`;

const AccordionItemTitle = ({ children, as, ...props }) => {
  const { isOpen } = useContext(AccordionItemContext);

  return (
    <Wrapper {...getHtmlAttributes(props)}>
      <Inner>
        <Title as={as}>{children}</Title>
        <Icon>{isOpen ? '–' : '+'}</Icon>
      </Inner>
    </Wrapper>
  );
};

AccordionItemTitle.propTypes = propTypes;

export default AccordionItemTitle;
