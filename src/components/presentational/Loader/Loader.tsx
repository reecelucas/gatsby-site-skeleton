import * as React from 'react';

const styles = require('./Loader.module.scss');

interface State {
    show: boolean;
}

interface Props {
    delay?: number;
}

class Loader extends React.Component<Props, State> {
    timer: number | null;
    delay: number;

    constructor(props: Props) {
        super(props);
        this.state = { show: false };

        this.timer = null;
        this.delay = this.props.delay || 250;
    }

    componentDidMount() {
        this.timer = window.setTimeout(() => {
            this.setState({ show: true });
        }, this.delay);
    }

    componentWillUnmount() {
        window.clearTimeout(this.timer);
    }

    render() {
        return this.state.show ? (
            <div className={styles.loader}>
                <span />
                <span />
                <span />
            </div>
        ) : null;
    }
}

export default Loader;
