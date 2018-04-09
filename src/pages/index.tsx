import * as React from 'react';
import Helmet from 'react-helmet';
import { LazyLoadAPI } from '../types';

// Utility
import lazyLoad from '../utilities/lazyLoad';
import jsEnabled from '../utilities/jsEnabled';
import ErrorBoundary from '../components/utility/ErrorBoundary/ErrorBoundary';

// Layout components
import Wrapper from '../components/utility/Wrapper/Wrapper';
import Spacer from '../components/utility/Spacer/Spacer';
import AspectRatioWrapper from '../components/utility/AspectRatioWrapper/AspectRatioWrapper';
import ResponsiveImage from '../components/utility/ResponsiveImage';

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
            <Spacer size="huge">
                <Helmet>
                    <title>Index Page | Optional Title</title>
                    <meta name="description" content="Optional index page description" />
                </Helmet>

                <Spacer size="large">
                    <Wrapper>
                        <br />
                        <br />
                        <h1>Static Site Skeleton</h1>
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
            </Spacer>
        );
    }
}

export default IndexPage;
