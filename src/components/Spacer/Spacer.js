import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { SPACING } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'large', 'huge'])
};

const StyledSpacer = styled.div`
  margin-bottom: ${({ size }) => SPACING[size] || SPACING.base};
`;

const Spacer = ({ children, size, as }) => (
  <StyledSpacer size={size} as={as}>
    {children}
  </StyledSpacer>
);

Spacer.propTypes = propTypes;

export default Spacer;
