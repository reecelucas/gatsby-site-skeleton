import * as React from 'react';

interface Props {
    children?: any;
    expanded?: boolean;
    toggleVisibility?: () => void;
}

const AccordionItemTitle = ({ expanded, toggleVisibility, children }: Props) => (
    <h2>
        <button aria-expanded={expanded ? 'true' : 'false'} onClick={toggleVisibility}>
            {children}
        </button>
    </h2>
);

export default AccordionItemTitle;
