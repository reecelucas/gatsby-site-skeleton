import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormContext from './FormContext';
import Field from './Field';

const propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.object, // `yup` ObjectSchema
  children: PropTypes.func.isRequired
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

    if (!validationSchema) {
      handleSubmit({ values, setSubmitting: setIsSubmitting });
      return;
    }

    validateSubmission()
      .then(() => {
        handleSubmit({ values, setSubmitting: setIsSubmitting });
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };

  const getContextProps = () => ({
    handleChange: onChange,
    values
  });

  const getRenderProps = () => ({
    handleSubmit: onSubmit,
    handleChange: onChange,
    initialValues,
    values,
    errors,
    isSubmitting
  });

  return (
    <FormContext.Provider value={getContextProps()}>
      {children(getRenderProps())}
    </FormContext.Provider>
  );
};

Form.propTypes = propTypes;

export { Form, Field };
