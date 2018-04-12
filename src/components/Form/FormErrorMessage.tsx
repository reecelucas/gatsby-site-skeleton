import * as React from 'react';

const FormErrorMessage = ({ message }: { message?: string }) => (
    <p role="alert" aria-live="assertive">
        {message || 'Please fill in this field.'}
    </p>
);

export default FormErrorMessage;
