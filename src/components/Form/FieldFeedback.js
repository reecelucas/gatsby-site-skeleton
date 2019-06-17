import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { FormFieldContext } from './Context';
import { COLOURS, SPACING, TYPE_SCALE } from '../../styles/theme';

const StyledError = styled.span`
  color: ${COLOURS.error};
  display: block;
  font-size: ${TYPE_SCALE[16]};
  margin-bottom: ${SPACING.tiny};
`;

const FieldFeedback = ({ ...props }) => {
  const { error } = useContext(FormFieldContext);
  return error && <StyledError {...props}>{error}</StyledError>;
};

export default FieldFeedback;
