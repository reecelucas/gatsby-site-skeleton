import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './AccordionContext';
import styled from '@emotion/styled';
import { SPACING, COLOURS } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired
};

const Body = styled.div`
  background-color: ${COLOURS.base};
  box-shadow: inset 0 0 0 1px ${COLOURS.primary};
  margin-bottom: ${SPACING.base};
  padding: ${SPACING.small};
`;

const AccordionItemBody = ({ children }) => {
  const { expanded } = useContext(AccordionContext);

  return <Body hidden={!expanded}>{children}</Body>;
};

AccordionItemBody.propTypes = propTypes;

export default AccordionItemBody;
