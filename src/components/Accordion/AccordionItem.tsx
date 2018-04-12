import * as React from 'react';

interface State {
    expanded: boolean;
}

interface Props {
    children?: any;
    expanded?: boolean;
}

/**
 * When available in Gatsby v2, `React.cloneElement` should be replaced
 * with the `context` API as a means of implicitly passing props into children
 */
class AccordionItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            expanded: this.props.expanded || false
        };

        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        const childProps = {
            expanded: this.state.expanded,
            toggleVisibility: this.toggleVisibility
        };

        return React.Children.map(this.props.children, child =>
            React.cloneElement(child as React.ReactElement<any>, childProps)
        );
    }
}

export default AccordionItem;
