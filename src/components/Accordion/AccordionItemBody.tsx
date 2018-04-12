import * as React from 'react';

interface Props {
    children?: any;
    expanded?: boolean;
}

const AccordionItemBody = ({ expanded, children }: Props) => (
    <div hidden={!expanded}>{children}</div>
);

export default AccordionItemBody;
