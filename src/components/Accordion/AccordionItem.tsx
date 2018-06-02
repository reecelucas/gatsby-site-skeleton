import * as React from 'react';
import { Provider } from './AccordionItemContext';

interface State {
    expanded: boolean;
}

interface Props {
    children?: any;
    expanded?: boolean;
}

class AccordionItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            expanded: this.props.expanded || false
        };

        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    toggleVisibility() {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    }

    render() {
        return (
            <Provider
                value={{
                    expanded: this.state.expanded,
                    onClick: this.toggleVisibility
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default AccordionItem;
