import * as React from 'react';
import AccordionItemContext from './AccordionItemContext';

const styles = require('./Accordion.module.scss');

const AccordionItemTitle = ({ children }: any) => (
    <AccordionItemContext.Consumer>
        {({ expanded, onClick }) => (
            <h2 className={styles.title}>
                <button
                    className={styles.button}
                    aria-expanded={expanded ? 'true' : 'false'}
                    onClick={onClick}
                >
                    {children}
                </button>
            </h2>
        )}
    </AccordionItemContext.Consumer>
);

export default AccordionItemTitle;
