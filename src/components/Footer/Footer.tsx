import * as React from 'react';
import Wrapper from '../utility/Wrapper/Wrapper';
import Spacer from '../utility/Spacer/Spacer';
import Anchor from '../utility/Anchor/Anchor';

const styles = require('./Footer.module.scss');

const Footer = () => (
    <footer className={styles.footer}>
        <Wrapper>
            <p>
                View the source for this skeleton at{' '}
                <Anchor href="https://github.com/reecelucas/gatsby-site-skeleton" newTab>
                    https://github.com/reecelucas/gatsby-site-skeleton
                </Anchor>
            </p>
        </Wrapper>
    </footer>
);

export default Footer;
