import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import getHtmlAttributes from '../../helpers/getHtmlAttributes';
import { SPACING, COLOURS } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string
};

const Body = styled.div`
  background-color: ${COLOURS.base};
  box-shadow: inset 0 0 0 1px ${COLOURS.primary};
  padding: ${SPACING.small};
`;

const AccordionItemBody = ({ children, as, ...props }) => (
  <Body as={as} {...getHtmlAttributes(props)}>
    {children}
  </Body>
);

AccordionItemBody.propTypes = propTypes;

export default AccordionItemBody;
