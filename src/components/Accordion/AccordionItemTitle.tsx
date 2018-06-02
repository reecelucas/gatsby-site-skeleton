import * as React from 'react';
import { Consumer } from './AccordionItemContext';

const styles = require('./Accordion.module.scss');

const AccordionItemTitle = ({ children }: any) => (
    <Consumer>
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
    </Consumer>
);

export default AccordionItemTitle;
