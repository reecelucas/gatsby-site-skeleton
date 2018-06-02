import * as React from 'react';
import * as classNames from 'classnames';

const styles = require('./Alert.module.scss');

interface State {
    show: boolean;
}

interface Props {
    message: string;
    theme: 'success' | 'warning' | 'error';
    className?: string;
    dismissable?: boolean;
}

class Alert extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { show: true };
        this.dismiss = this.dismiss.bind(this);
    }

    dismiss() {
        this.setState({ show: false });
    }

    render() {
        const { message, theme, className, dismissable } = this.props;
        const classList = classNames(styles.alert, styles[`alert--${theme}`], className);

        return this.state.show ? (
            <div className={classList} role="alert" aria-live="assertive">
                {message}
                {dismissable && (
                    <button className={styles.close} onClick={this.dismiss}>
                        <span className="u-visually-hidden">Close alert</span>
                    </button>
                )}
            </div>
        ) : null;
    }
}

export default Alert;
