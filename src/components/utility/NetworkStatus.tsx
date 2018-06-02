import * as React from 'react';

interface State {
    online: boolean;
}

interface Props {
    children?: any;
}

// NetworkStatus class that detects offline/online changes
class NetworkStatus extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { online: true };

        this.goOnline = this.goOnline.bind(this);
        this.goOffline = this.goOffline.bind(this);
    }

    goOnline() {
        this.setState({ online: true });
    }

    goOffline() {
        this.setState({ online: false });
    }

    componentDidMount() {
        this.setState({
            online: typeof navigator.onLine === 'boolean' ? navigator.onLine : true
        });

        window.addEventListener('online', this.goOnline);
        window.addEventListener('offline', this.goOffline);
    }

    componentWillUnmount() {
        window.removeEventListener('online', this.goOnline);
        window.removeEventListener('offline', this.goOffline);
    }
}

export class Online extends NetworkStatus {
    render() {
        return this.state.online && this.props.children;
    }
}

export class Offline extends NetworkStatus {
    render() {
        return !this.state.online && this.props.children;
    }
}
