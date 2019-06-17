import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from './Context';

const propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.object, // `yup` ObjectSchema
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired
};

const Form = ({ initialValues, handleSubmit, validationSchema, children }) => {
  const fieldNames = Object.keys(initialValues);
  const initialErrors = fieldNames.reduce(
    (obj, key) => ({
      ...obj,
      [key]: ''
    }),
    {}
  );

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateSubmission = () =>
    new Promise((resolve, reject) => {
      validationSchema
        .validate(values, { abortEarly: false })
        .then(() => {
          setErrors({ ...initialErrors }); // Reset errors
          resolve();
        })
        .catch(error => {
          const errors = error.inner.reduce(
            (obj, error) => ({
              ...obj,
              [error.path]: error.message
            }),
            {}
          );

          setErrors({ ...initialErrors, ...errors });
          reject();
        });
    });

  const onChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setValues(values => ({ ...values, [target.name]: value }));
  };

  const onSubmit = event => {
    event.preventDefault();
    setIsSubmitting(true);

    const handleSubmission = () => {
      handleSubmit({
        values,
        handleReset: onReset,
        setSubmitting: setIsSubmitting
      });
    };

    if (!validationSchema) {
      handleSubmission();
      return;
    }

    validateSubmission()
      .then(() => {
        handleSubmission();
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };

  const onReset = () => {
    setValues({ ...initialValues });
  };

  const getContextProps = () => ({
    handleChange: onChange,
    values,
    errors
  });

  const getRenderProps = () => ({
    handleSubmit: onSubmit,
    handleChange: onChange,
    handleReset: onReset,
    initialValues,
    values,
    errors,
    isSubmitting
  });

  const renderForm = () => (
    <form onSubmit={onSubmit} noValidate>
      <>{children}</>
    </form>
  );

  return (
    <FormContext.Provider value={getContextProps()}>
      {typeof children === 'function'
        ? children(getRenderProps())
        : renderForm()}
    </FormContext.Provider>
  );
};

Form.propTypes = propTypes;

export default Form;
