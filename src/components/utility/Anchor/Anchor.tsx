import * as React from 'react';
import { AnchorProps } from '../../../types';

const styles = require('./Anchor.module.scss');

const Anchor = ({
  href,
  newTab,
  title,
  ariaLabel,
  customClass,
  children
}: AnchorProps) => (
  <a
    className={customClass || styles.anchor}
    href={href}
    title={title || null}
    aria-label={ariaLabel || null}
    target={newTab ? '_blank' : null}
    // https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
    rel={newTab ? 'noopener noreferrer' : null}
  >
    {children}
  </a>
);

export default Anchor;
