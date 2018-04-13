import * as React from 'react';

const styles = require('./Accordion.module.scss');

interface Props {
    children?: any;
    expanded?: boolean;
    toggleVisibility?: () => void;
}

const AccordionItemTitle = ({ expanded, toggleVisibility, children }: Props) => (
    <h2 className={styles.title}>
        <button
            className={styles.button}
            aria-expanded={expanded ? 'true' : 'false'}
            onClick={toggleVisibility}
        >
            {children}
        </button>
    </h2>
);

export default AccordionItemTitle;
