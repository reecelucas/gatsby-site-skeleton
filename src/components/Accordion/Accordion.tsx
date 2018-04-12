import * as React from 'react';
import AccordionItem from './AccordionItem';
import AccordionItemTitle from './AccordionItemTitle';
import AccordionItemBody from './AccordionItemBody';

/**
 * Simple accessible (multiselect) accordion component based on:
 * https://inclusive-components.design/collapsible-sections/
 */
const Accordion = ({ children }: any) => <div>{children}</div>;

export { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody };
