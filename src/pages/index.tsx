import * as React from 'react';
import Helmet from 'react-helmet';
import { LazyLoadAPI } from '../types';

// utility
import lazyLoad from '../utility/lazyLoad';

// layout components
import Wrapper from '../components/utility/Wrapper/Wrapper';
import Spacer from '../components/utility/Spacer/Spacer';

class IndexPage extends React.Component<any, void> {
  lazyLoad: LazyLoadAPI;

  // initialise page-specific modules that require the DOM
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

        <Wrapper>
          <h1>Static Site Skeleton</h1>
        </Wrapper>
      </Spacer>
    );
  }
}

export default IndexPage;
