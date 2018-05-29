import * as React from 'react';
import FormErrorMessage from './FormErrorMessage';
import Alert from '../utility/Alert/Alert';
import Spacer from '../utility/Spacer/Spacer';
import Loader from '../presentational/Loader/Loader';
import validateEmail from '../../utilities/validateEmail';
import encodeFormData from './encodeFormData';
import { Online, Offline } from '../utility/NetworkStatus';
import { NAME, EMAIL, SUBJECT, MESSAGE, EMAIL_API_ENDPOINT, MESSAGES } from './constants';

const styles = require('./Form.module.scss');

const initialState = {
    fields: {
        [NAME]: '',
        [EMAIL]: '',
        [SUBJECT]: '',
        [MESSAGE]: ''
    },

    touched: {
        [NAME]: false,
        [EMAIL]: false,
        [SUBJECT]: false,
        [MESSAGE]: false
    },

    errors: {
        [NAME]: true,
        [EMAIL]: true,
        [SUBJECT]: true,
        [MESSAGE]: true
    },

    submitting: false,
    success: false,
    error: false,
    submissionErrorMessage: '',

    validateNatively: true
};

class Form extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = initialState;

        this.validateField = this.validateField.bind(this);
        this.shouldShowError = this.shouldShowError.bind(this);
        this.canBeSubmitted = this.canBeSubmitted.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
        this.handleSubmitError = this.handleSubmitError.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * If these lifecycle hooks are called, it means js is enabled in
     * the client, so we can safely validate the form with js
     */
    componentDidMount() {
        this.setState({ validateNatively: false });
    }

    componentDidUpdate() {
        if (this.state.validateNatively) {
            this.setState({ validateNatively: false });
        }
    }

    validateField(name: string, value: any) {
        let valid: boolean = false;

        switch (name) {
            case NAME:
            case SUBJECT:
            case MESSAGE:
                valid = value && value.length > 0;
                break;

            case EMAIL:
                valid = value && validateEmail(value);
                break;
        }

        this.setState({
            errors: {
                ...this.state.errors,
                [name]: !valid
            }
        });
    }

    shouldShowError(field: string) {
        // Returns true if the input has received `focus` and is not valid
        const { errors, touched } = this.state;
        return errors[field] && touched[field];
    }

    canBeSubmitted() {
        const { errors } = this.state;
        // Returns true if the `errors` object contains no `truthy` values
        return !Object.keys(errors).some(key => errors[key]);
    }

    handleInputChange(event: React.ChangeEvent<any>) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // After we've updated state with the input value, check if it's valid
        this.setState(
            {
                fields: {
                    ...this.state.fields,
                    [name]: value
                }
            },
            () => {
                this.validateField(name, value);
            }
        );
    }

    handleInputBlur(event: React.FocusEvent<any>) {
        const name = event.target.name;

        this.setState({
            touched: {
                ...this.state.touched,
                [name]: true
            }
        });
    }

    handleSubmitSuccess() {
        // Reset form state after showing success message
        this.setState(
            {
                success: true,
                submitting: false,
                error: false,
                submissionErrorMessage: ''
            },
            () => {
                setTimeout(() => {
                    this.setState({ ...this.state, ...initialState });
                }, 2500);
            }
        );
    }

    handleSubmitError(message?: string) {
        const errorMsg = `
            There was a problem sending the email. Please try refreshing your browser or resubmitting.
            ${message ? `Error: ${message}.` : ''}
        `;

        this.setState({
            submitting: false,
            error: true,
            submissionErrorMessage: errorMsg
        });
    }

    handlePost(formData: string, actionUrl: string) {
        this.setState({ submitting: true });

        // Construct the fetch request object
        const request = new Request(actionUrl, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            body: formData
        });

        fetch(request)
            .then(response => {
                // Force execution into the `catch` statement
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                this.handleSubmitSuccess();
            })
            .catch(error => {
                this.handleSubmitError(error.message);
            });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!this.canBeSubmitted()) return;

        const target = event.target as HTMLFormElement;
        const actionUrl = target.action;

        // Encode form data in a format compatible with Basin's (https://usebasin.com) endpoint
        const formData = encodeFormData({ ...this.state.fields });
        this.handlePost(formData, actionUrl);
    }

    render() {
        return (
            <div className={styles.container}>
                <Offline>
                    <Spacer>
                        <Alert message={MESSAGES.offline} theme="warning" />
                    </Spacer>
                </Offline>

                <form
                    action={EMAIL_API_ENDPOINT}
                    method="POST"
                    className={styles.form}
                    onSubmit={this.handleSubmit}
                    noValidate={!this.state.validateNatively}
                >
                    <div className={`${styles.item} ${styles.itemHalf}`}>
                        <label htmlFor={NAME}>
                            <span className={styles.label}>
                                Name <span className="u-text--">(required)</span>
                            </span>
                            <input
                                id={NAME}
                                className={this.shouldShowError(NAME) ? styles.hasError : ''}
                                type="text"
                                name={NAME}
                                value={this.state.fields[NAME]}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputBlur}
                                required={this.state.validateNatively}
                            />
                            {this.shouldShowError(NAME) && <FormErrorMessage />}
                        </label>
                    </div>

                    <div className={`${styles.item} ${styles.itemHalf}`}>
                        <label htmlFor={EMAIL}>
                            <span className={styles.label}>
                                Email <span className="u-text--">(required)</span>
                            </span>
                            <input
                                id={EMAIL}
                                className={this.shouldShowError(EMAIL) ? styles.hasError : ''}
                                type="email"
                                name={EMAIL}
                                value={this.state.fields[EMAIL]}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputBlur}
                                required={this.state.validateNatively}
                            />
                            {this.shouldShowError(EMAIL) && (
                                <FormErrorMessage message={MESSAGES.inputErrorEmail} />
                            )}
                        </label>
                    </div>

                    <div className={styles.item}>
                        <label htmlFor={SUBJECT}>
                            <span className={styles.label}>
                                Subject <span className="u-text--">(required)</span>
                            </span>
                            <input
                                id={SUBJECT}
                                className={this.shouldShowError(SUBJECT) ? styles.hasError : ''}
                                type="text"
                                name={SUBJECT}
                                value={this.state.fields[SUBJECT]}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputBlur}
                                required={this.state.validateNatively}
                            />
                            {this.shouldShowError(SUBJECT) && <FormErrorMessage />}
                        </label>
                    </div>

                    <div className={styles.item}>
                        <label htmlFor={MESSAGE}>
                            <span className={styles.label}>
                                Message <span className="u-text--">(required)</span>
                            </span>
                            <textarea
                                id={MESSAGE}
                                className={this.shouldShowError(MESSAGE) ? styles.hasError : ''}
                                name={MESSAGE}
                                value={this.state.fields[MESSAGE]}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputBlur}
                                required={this.state.validateNatively}
                            />
                            {this.shouldShowError(MESSAGE) && <FormErrorMessage />}
                        </label>
                    </div>

                    {this.state.success && (
                        <Spacer size="small">
                            <Alert message={MESSAGES.redirect} theme="success" />
                        </Spacer>
                    )}

                    {this.state.error && (
                        <Spacer size="small">
                            <Alert
                                message={this.state.submissionErrorMessage || MESSAGES.submitError}
                                theme="error"
                            />
                        </Spacer>
                    )}

                    <Online>
                        <button
                            className={styles.submit}
                            type="submit"
                            disabled={!this.canBeSubmitted() && !this.state.validateNatively}
                        >
                            {!this.state.submitting ? 'Send' : <Loader />}
                        </button>
                    </Online>
                </form>
            </div>
        );
    }
}

export default Form;
