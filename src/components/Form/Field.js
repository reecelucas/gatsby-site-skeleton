import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext, FormFieldContext } from './Context';

const propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const Field = ({ name, children }) => {
  const { errors } = useContext(FormContext);

  return (
    <FormFieldContext.Provider value={{ name, error: errors[name] }}>
      {children}
    </FormFieldContext.Provider>
  );
};

Field.propTypes = propTypes;

export default Field;
