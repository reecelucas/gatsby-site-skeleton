import * as React from 'react';

const styles = require('./Accordion.module.scss');

interface Props {
    children?: any;
    expanded?: boolean;
}

const AccordionItemBody = ({ expanded, children }: Props) => (
    <div className={styles.body} hidden={!expanded}>
        {children}
    </div>
);

export default AccordionItemBody;
