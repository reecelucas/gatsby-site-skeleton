import * as React from 'react';
import AccordionItemContext from './AccordionItemContext';

const styles = require('./Accordion.module.scss');

const AccordionItemBody = ({ children }: any) => (
    <AccordionItemContext.Consumer>
        {({ expanded }) => (
            <div className={styles.body} hidden={!expanded}>
                {children}
            </div>
        )}
    </AccordionItemContext.Consumer>
);

export default AccordionItemBody;
