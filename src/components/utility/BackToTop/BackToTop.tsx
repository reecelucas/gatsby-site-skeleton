import * as React from 'react';
import scrollTo from '../../../utility/scrollTo';
import { BackToTopProps } from '../../../types';

const styles = require('./BackToTop.module.scss');

class BackToTop extends React.Component<BackToTopProps, JSX.Element> {
  constructor(props: BackToTopProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { offset, duration, easing } = this.props;
    scrollTo(offset, duration, easing);
  }

  render() {
    return (
      <button
        className={styles.button}
        onClick={this.handleClick}
        aria-label="Scroll to top of page"
      >
        <svg className={styles.icon} viewBox="0 0 32 32" x="0px" y="0px">
          <polygon points="2,16 9.999,16 9.999,30 21.999,30 21.999,16 29.999,16 15.999,2" />
        </svg>
      </button>
    );
  }
}

export default BackToTop;
