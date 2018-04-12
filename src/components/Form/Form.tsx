import * as React from 'react';
import FormErrorMessage from './FormErrorMessage';
import Alert from '../utility/Alert/Alert';
import validateEmail from '../../utilities/validateEmail';

const initialState = {
    name: '',
    email: '',
    message: '',

    touched: {
        name: false,
        email: false,
        message: false
    },

    errors: {
        name: true,
        email: true,
        message: true
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

    componentDidMount() {
        /**
         * If this code runs, it means js is enabled in the client,
         * so we can safely validate the form with js
         */
        this.setState({ validateNatively: false });
    }

    validateField(name: string, value: any) {
        let valid: boolean = false;

        switch (name) {
            case 'name':
                valid = value && value.length > 0;
                break;

            case 'message':
                valid = value && value.length > 0;
                break;

            case 'email':
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

    handleInputChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // After we've updated state with the input value, check if it's valid
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });
    }

    handleInputBlur(event: any) {
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
                error: false,
                submissionErrorMessage: ''
            },
            () => {
                window.setTimeout(() => {
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

    handlePost(formData: FormData, actionUrl: string) {
        this.setState({ submitting: true });

        // Construct the fetch request object
        const request = new Request(actionUrl, {
            headers: { Accept: 'application/json' },
            method: 'POST',
            body: formData
        });

        fetch(request)
            .then(response => {
                // Force execution into the `catch` statement
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }

                this.handleSubmitSuccess();
            })
            .catch(error => {
                this.handleSubmitError(error.message);
            });
    }

    handleSubmit(event: any) {
        event.preventDefault();

        if (!this.canBeSubmitted()) return;

        const target = event.target;
        const actionUrl = target.action;

        const formData = new FormData(target);
        this.handlePost(formData, actionUrl);
    }

    render() {
        return (
            <form
                method="POST"
                action="https://formspree.io/reecelucas@sky.com"
                onSubmit={this.handleSubmit}
                noValidate={!this.state.validateNatively}
            >
                <div>
                    <label htmlFor="name">
                        Name (required)<br />
                        <input
                            id="name"
                            className={this.shouldShowError('name') ? 'has-error' : ''}
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}
                            required={this.state.validateNatively}
                        />
                        {this.shouldShowError('name') && <FormErrorMessage />}
                    </label>
                </div>

                <div>
                    <label htmlFor="email">
                        Email (required)<br />
                        <input
                            id="email"
                            className={this.shouldShowError('email') ? 'has-error' : ''}
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}
                            required={this.state.validateNatively}
                        />
                        {this.shouldShowError('email') && (
                            <FormErrorMessage message="Please enter a valid email address." />
                        )}
                    </label>
                </div>

                <div>
                    <label htmlFor="message">
                        Message (required)<br />
                        <textarea
                            id="message"
                            className={this.shouldShowError('message') ? 'has-error' : ''}
                            name="message"
                            value={this.state.message}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputBlur}
                            required={this.state.validateNatively}
                        />
                        {this.shouldShowError('message') && <FormErrorMessage />}
                    </label>
                </div>

                {this.state.success && (
                    <Alert
                        message="Your enquiry has been received! I'll be in touch very soon."
                        theme="success"
                    />
                )}

                {this.state.error && (
                    <Alert message={this.state.submissionErrorMessage || 'Error!'} theme="error" />
                )}

                <button
                    type="submit"
                    disabled={!this.canBeSubmitted() && !this.state.validateNatively}
                >
                    Send
                </button>
            </form>
        );
    }
}

export default Form;
