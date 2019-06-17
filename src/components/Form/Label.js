import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FormFieldContext } from './Context';
import { COLOURS, SPACING, TYPE_SCALE } from '../../styles/theme';

const propTypes = {
  children: PropTypes.string.isRequired
};

const StyledLabel = styled.label`
  display: block;
  color: ${COLOURS.primary};
  font-size: ${TYPE_SCALE[16]};
  font-weight: 600;
  line-height: 1;
  margin-bottom: ${SPACING.tiny};
`;

const Label = ({ children, ...props }) => {
  const { name } = useContext(FormFieldContext);

  return (
    <StyledLabel htmlFor={name} {...props}>
      {children}
    </StyledLabel>
  );
};

Label.propTypes = propTypes;

export default Label;
