import React from 'react';

import Layout from '../components/Layout/Layout';
import Spacer from '../components/Spacer/Spacer';
import Wrapper from '../components/Wrapper/Wrapper';
import Alert from '../components/Alert/Alert';
import Button from '../components/Button/Button';
import Anchor from '../components/Anchor/Anchor';
import SkipLink from '../components/SkipLink/SkipLink';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from '../components/Accordion';

import useNetworkStatus from '../hooks/useNetworkStatus';

const IndexPage = () => {
  const isOnline = useNetworkStatus();

  return (
    <Layout>
      <SkipLink />

      <main id="content">
        <Wrapper>
          <Spacer>
            <Alert appearance={isOnline ? 'success' : 'warning'}>
              {`You are currently ${isOnline ? 'online' : 'offline'}`}
            </Alert>
          </Spacer>

          <Spacer as="p">
            Dolor laborum fugiat ad adipisicing ullamco aliqua elit commodo
            tempor elit est. Do eiusmod dolor et labore. Eiusmod minim cillum
            consectetur eiusmod mollit culpa ipsum dolor ut qui mollit minim ut.
            Ullamco dolor enim labore consectetur laboris velit proident ullamco
            ullamco in sit duis.{' '}
            <Anchor href="/" title="Visit about" id="index-test-anchor">
              Click me!
            </Anchor>{' '}
          </Spacer>

          <Spacer size="large">
            <Accordion>
              <AccordionItem expanded>
                <AccordionItemTitle>Title One</AccordionItemTitle>
                <AccordionItemBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim inventore velit sint quod blanditiis, sapiente
                    voluptatibus, molestiae, dolore ipsam labore quaerat
                    veritatis fuga libero! Explicabo aperiam sapiente optio
                    consectetur placeat.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemTitle>Title Two</AccordionItemTitle>
                <AccordionItemBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim inventore velit sint quod blanditiis, sapiente
                    voluptatibus, molestiae, dolore ipsam labore quaerat
                    veritatis fuga libero! Explicabo aperiam sapiente optio
                    consectetur placeat.
                  </p>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          </Spacer>

          <Button
            id="index-button"
            onClick={() => {
              throw new Error('Error handling test');
            }}
          >
            Click me!
          </Button>
        </Wrapper>
      </main>
    </Layout>
  );
};

export default IndexPage;
