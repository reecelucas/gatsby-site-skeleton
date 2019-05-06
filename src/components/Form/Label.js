import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { COLOURS, SPACING, TYPE_SCALE } from '../../styles/theme';

const propTypes = {
  children: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired
};

const StyledLabel = styled.label`
  display: block;
  color: ${COLOURS.primary};
  font-size: ${TYPE_SCALE[16]};
  font-weight: 600;
  line-height: 1;
  margin-bottom: ${SPACING.tiny};
`;

const Label = ({ htmlFor, children, ...props }) => (
  <StyledLabel htmlFor={htmlFor} {...props}>
    {children}
  </StyledLabel>
);

Label.propTypes = propTypes;

export default Label;
