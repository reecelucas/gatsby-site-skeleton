import * as React from 'react';

interface Props {
    children: any;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        this.setState({ hasError: true });
        console.warn(info.componentStack);
    }

    render() {
        // Render fallback UI
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
