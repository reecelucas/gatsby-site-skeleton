import * as React from 'react';
import { LazyLoadAPI } from '../types';

// utility
import lazyLoad from '../utility/lazyLoad';

// layout components
import Wrapper from '../components/utility/Wrapper/Wrapper';
import Spacer from '../components/utility/Spacer/Spacer';

class IndexPage extends React.Component<any, void> {
  lazyLoader: LazyLoadAPI;

  // initialise page-specific modules that require the DOM
  componentDidMount() {
    this.lazyLoader = lazyLoad();
    this.lazyLoader.init();
  }

  componentWillUnmount() {
    this.lazyLoader.destroy();
  }

  render() {
    return (
      <Spacer size="huge">
        <Wrapper>
          <h1>Static Site Skeleton</h1>
        </Wrapper>
      </Spacer>
    );
  }
}

export default IndexPage;
