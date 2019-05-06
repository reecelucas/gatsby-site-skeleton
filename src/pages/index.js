import React from 'react';
import * as yup from 'yup';

import Layout from '../components/Layout/Layout';
import Spacer from '../components/Spacer/Spacer';
import Wrapper from '../components/Wrapper/Wrapper';
import Alert from '../components/Alert/Alert';
import Button from '../components/Button/Button';
import Anchor from '../components/Anchor/Anchor';
import SkipLink from '../components/SkipLink/SkipLink';
import { Form, Field, Label, Error } from '../components/Form';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from '../components/Accordion';

import useNetworkStatus from '../hooks/useNetworkStatus';

const validationSchema = yup.object().shape({
  name: yup.string().required('Please provide a name'),
  email: yup
    .string()
    .email()
    .required('Please provide a valid email')
});

const IndexPage = () => {
  const isOnline = useNetworkStatus();

  const onFormSubmit = ({ values, setSubmitting }) => {
    console.log('onSubmit value', values);
    setSubmitting(false);
  };

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

          <Spacer>
            <Form
              initialValues={{
                name: '',
                email: '',
                message: ''
              }}
              handleSubmit={onFormSubmit}
              validationSchema={validationSchema}
            >
              {({ handleSubmit, errors }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <Label htmlFor="name">Name</Label>
                  <Field id="name" name="name" component="input" type="text" />
                  <Error error={errors.name} />

                  <Label htmlFor="email">Email</Label>
                  <Field
                    id="email"
                    name="email"
                    component="input"
                    type="email"
                  />
                  <Error error={errors.email} />

                  <Label htmlFor="pets">Pets</Label>
                  <Field id="pets" name="pets" component="select">
                    <option value="">--Select an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="other">Other</option>
                  </Field>

                  <Label htmlFor="message">Message</Label>
                  <Field id="message" name="message" component="textarea" />

                  <button type="submit">Submit</button>
                </form>
              )}
            </Form>
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
