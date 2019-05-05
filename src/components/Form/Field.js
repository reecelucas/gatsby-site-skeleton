import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FormContext from './FormContext';

const FIELD_TYPES = {
  input: 'input',
  textarea: 'textarea',
  select: 'select'
};

const propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  children: PropTypes.node
};

const Field = ({ name, component = FIELD_TYPES.input, children, ...props }) => {
  const { handleChange, values } = useContext(FormContext);

  const renderInput = () => (
    <input
      name={name}
      onChange={handleChange}
      value={values[name]}
      {...props}
    />
  );

  const renderTextarea = () => (
    <textarea
      name={name}
      onChange={handleChange}
      value={values[name]}
      {...props}
    />
  );

  const renderSelect = () => (
    <select name={name} onChange={handleChange} value={values[name]} {...props}>
      {children}
    </select>
  );

  const renderField = {
    [FIELD_TYPES.input]: renderInput,
    [FIELD_TYPES.textarea]: renderTextarea,
    [FIELD_TYPES.select]: renderSelect
  };

  return renderField[component]();
};

Field.propTypes = propTypes;

export default Field;
