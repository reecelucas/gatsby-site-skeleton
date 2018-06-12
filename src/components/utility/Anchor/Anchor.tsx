import * as React from 'react';

const styles = require('./Anchor.module.scss');

interface Props {
    href: string;
    title?: string;
    ariaLabel?: string;
    className?: string;
    children: any;
    newTab?: boolean;
}

const Anchor = ({ href, newTab, title, ariaLabel, className, children }: Props) => (
    <a
        className={className || styles.anchor}
        href={href}
        title={title || undefined}
        aria-label={ariaLabel || undefined}
        target={newTab ? '_blank' : undefined}
        // https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
        rel={newTab ? 'noopener noreferrer' : undefined}
    >
        {children}
    </a>
);

export default Anchor;
