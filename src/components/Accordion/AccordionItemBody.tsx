import * as React from 'react';
import { Consumer } from './AccordionItemContext';

const styles = require('./Accordion.module.scss');

const AccordionItemBody = ({ children }: any) => (
    <Consumer>
        {({ expanded }) => (
            <div className={styles.body} hidden={!expanded}>
                {children}
            </div>
        )}
    </Consumer>
);

export default AccordionItemBody;
