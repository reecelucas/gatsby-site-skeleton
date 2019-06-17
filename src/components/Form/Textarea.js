import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { FormContext, FormFieldContext } from './Context';

const StyledTextarea = styled.textarea`
  min-height: 200px;
  overflow: auto;
  resize: vertical;
`;

const Textarea = ({ ...props }) => {
  const { handleChange, values, errors } = useContext(FormContext);
  const { name } = useContext(FormFieldContext);

  return (
    <StyledTextarea
      id={name}
      name={name}
      onChange={handleChange}
      value={values[name]}
      aria-invalid={!!errors[name]}
      {...props}
    />
  );
};

export default Textarea;
