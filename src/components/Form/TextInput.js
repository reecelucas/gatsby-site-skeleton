import React, { useContext } from 'react';
import { FormContext, FormFieldContext } from './Context';

const TextInput = ({ ...props }) => {
  const { handleChange, values, errors } = useContext(FormContext);
  const { name } = useContext(FormFieldContext);

  return (
    <input
      id={name}
      name={name}
      onChange={handleChange}
      value={values[name]}
      aria-invalid={!!errors[name]}
      {...props}
    />
  );
};

export default TextInput;
