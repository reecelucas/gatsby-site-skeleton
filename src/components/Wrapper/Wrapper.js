import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { SPACING, WIDTHS } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string
};

const StyledWrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: ${WIDTHS.siteMax};
  padding: 0 ${SPACING.base};
`;

const Wrapper = ({ as, children }) => (
  <StyledWrapper as={as}>{children}</StyledWrapper>
);

Wrapper.propTypes = propTypes;

export default Wrapper;
