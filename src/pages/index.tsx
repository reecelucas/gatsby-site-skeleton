import * as React from 'react';
import Helmet from 'react-helmet';
import { LazyLoadAPI } from '../types';

// Utility
import lazyLoad from '../utilities/lazyLoad';
import jsEnabled from '../utilities/jsEnabled';
import ErrorBoundary from '../components/utility/ErrorBoundary';
import { Offline, Online } from '../components/utility/NetworkStatus';

// Layout components
import Wrapper from '../components/utility/Wrapper/Wrapper';
import Spacer from '../components/utility/Spacer/Spacer';
import AspectRatioWrapper from '../components/utility/AspectRatioWrapper/AspectRatioWrapper';
import ResponsiveImage from '../components/utility/ResponsiveImage';
import Alert from '../components/utility/Alert/Alert';
import Form from '../components/Form/Form';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody
} from '../components/Accordion/Accordion';

class IndexPage extends React.Component<any, void> {
    lazyLoad: LazyLoadAPI;

    // Initialise page-specific modules that require the DOM (after render)
    componentDidMount() {
        this.lazyLoad = lazyLoad();
        this.lazyLoad.init();
    }

    componentWillUnmount() {
        this.lazyLoad.destroy();
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Index Page | Optional Title</title>
                    <meta name="description" content="Optional index page description" />
                </Helmet>

                <Spacer>
                    <Wrapper>
                        <br />
                        <br />
                        <h1>Static Site Skeleton</h1>
                    </Wrapper>
                </Spacer>

                <Spacer size="large">
                    <Wrapper>
                        <Spacer>
                            <Alert
                                message="This is an example success message"
                                theme="success"
                                dismissable
                            />
                        </Spacer>
                        <Spacer>
                            <Alert message="This is an example warning message" theme="warning" />
                        </Spacer>
                        <Alert message="This is an example error message" theme="error" />
                    </Wrapper>
                </Spacer>

                <Spacer size="large">
                    <Wrapper>
                        <Spacer size="tiny">
                            <strong>Offline check:</strong>
                        </Spacer>

                        <Offline>
                            <Alert
                                message="If you're seeing this message, you're offline!"
                                theme="warning"
                            />
                        </Offline>
                        <Online>
                            <Alert
                                message="If you're seeing this message, you're online!"
                                theme="success"
                            />
                        </Online>
                    </Wrapper>
                </Spacer>

                <Spacer size="large">
                    <Wrapper>
                        <Form />
                    </Wrapper>
                </Spacer>

                <Spacer size="large">
                    <Wrapper>
                        <Accordion>
                            <Spacer size="small">
                                <AccordionItem expanded>
                                    <AccordionItemTitle>Accordion header</AccordionItemTitle>
                                    <AccordionItemBody>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Enim inventore velit sint quod blanditiis,
                                            sapiente voluptatibus, molestiae, dolore ipsam labore
                                            quaerat veritatis fuga libero! Explicabo aperiam
                                            sapiente optio consectetur placeat.
                                        </p>
                                    </AccordionItemBody>
                                </AccordionItem>
                            </Spacer>

                            <AccordionItem>
                                <AccordionItemTitle>Accordion header two</AccordionItemTitle>
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
                    </Wrapper>
                </Spacer>

                <Wrapper>
                    <Spacer size="large">
                        <AspectRatioWrapper>
                            <ErrorBoundary>
                                <ResponsiveImage
                                    alt="Placeholder"
                                    src="http://via.placeholder.com/800x400"
                                    sizes={[
                                        { size: '100vw', mediaCondition: '(max-width: 940px)' },
                                        { size: '940px', mediaCondition: '(min-width: 941px)' }
                                    ]}
                                    srcset={[
                                        {
                                            width: '500w',
                                            url: 'http://via.placeholder.com/500x250'
                                        },
                                        { width: '800w', url: 'http://via.placeholder.com/800x400' }
                                    ]}
                                />
                            </ErrorBoundary>
                        </AspectRatioWrapper>
                    </Spacer>
                </Wrapper>
            </React.Fragment>
        );
    }
}

export default IndexPage;
