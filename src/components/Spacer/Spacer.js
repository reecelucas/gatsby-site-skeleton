import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { SPACING } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf(['tiny', 'small', 'large', 'huge'])
};

const StyledSpacer = styled.div`
  margin-bottom: ${props => SPACING[props.size] || SPACING.base};
`;

const Spacer = ({ children, size }) => (
  <StyledSpacer size={size}>{children}</StyledSpacer>
);

Spacer.propTypes = propTypes;

export default Spacer;
