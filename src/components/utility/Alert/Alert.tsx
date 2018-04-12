import * as React from 'react';
import { ClassMap } from '../../../types';

const styles = require('./Alert.module.scss');

interface State {
    show: boolean;
}

interface Props {
    message: string;
    theme: 'success' | 'warning' | 'error';
    dismissable?: boolean;
}

const classMap: ClassMap = {
    success: styles['alert--success'],
    warning: styles['alert--warning'],
    error: styles['alert--error']
};

class Alert extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            show: true
        };

        this.dismiss = this.dismiss.bind(this);
    }

    dismiss() {
        this.setState({ show: false });
    }

    render() {
        const { message, theme, dismissable } = this.props;

        return this.state.show ? (
            <div
                className={`${styles.alert} ${classMap[theme]}`}
                role="alert"
                aria-live="assertive"
            >
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
