import * as React from 'react';
import { MESSAGES } from './constants';

const styles = require('./Form.module.scss');

interface Props {
    message?: string;
}

const FormErrorMessage = ({ message }: Props) => (
    <p className={styles.errorMessage} role="alert" aria-live="assertive">
        {message || MESSAGES.inputErrorGeneric}
    </p>
);

export default FormErrorMessage;
