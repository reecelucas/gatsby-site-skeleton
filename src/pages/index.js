import React from 'react';
import * as yup from 'yup';

import Layout from '../components/Layout/Layout';
import Spacer from '../components/Spacer/Spacer';
import Wrapper from '../components/Wrapper/Wrapper';
import Alert from '../components/Alert/Alert';
import Button from '../components/Button/Button';
import Link from '../components/Link/Link';
import SkipLink from '../components/SkipLink/SkipLink';
import {
  Form,
  Field,
  TextInput,
  Textarea,
  Select,
  Label,
  FieldFeedback
} from '../components/Form';
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

  const onFormSubmit = ({ values, handleReset, setSubmitting }) => {
    console.log('onSubmit value', values);
    setSubmitting(false);
    handleReset();
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
            <Link href="/" title="Visit about" id="index-test-link">
              Click me!
            </Link>
          </Spacer>

          <Spacer size="large">
            <Accordion>
              <AccordionItem initialOpen>
                <AccordionItemTitle>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </AccordionItemTitle>
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
                pets: '',
                message: ''
              }}
              handleSubmit={onFormSubmit}
              validationSchema={validationSchema}
            >
              <Field name="name">
                <Label>Name</Label>
                <TextInput />
                <FieldFeedback />
              </Field>

              <Field name="email">
                <Label>Email</Label>
                <TextInput type="email" />
                <FieldFeedback />
              </Field>

              <Field name="pets">
                <Label>Pets</Label>
                <Select>
                  <option value="">--Select an option--</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="other">Other</option>
                </Select>
              </Field>

              <Field name="message">
                <Label>Message</Label>
                <Textarea />
              </Field>

              <button type="submit">Submit</button>
            </Form>
          </Spacer>

          <Button
            id="index-button"
            onClick={() => {
              throw new Error('Error handling test!');
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
