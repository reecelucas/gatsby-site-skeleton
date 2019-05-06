import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { COLOURS, SPACING, TYPE_SCALE } from '../../styles/theme';

const propTypes = {
  error: PropTypes.string
};

const StyledError = styled.span`
  display: block;
  color: ${COLOURS.error};
  font-size: ${TYPE_SCALE[16]};
  margin-bottom: ${SPACING.tiny};
`;

const Error = ({ error, ...props }) =>
  error && <StyledError {...props}>{error}</StyledError>;

Error.propTypes = propTypes;

export default Error;
