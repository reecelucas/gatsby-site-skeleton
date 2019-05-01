import { useState, useEffect } from 'react';
import debounce from '../helpers/debounce';
import isBrowser from '../helpers/isBrowser';

/**
 * Usage:
 * const windowWidth = useWindowWidth(200);
 */
export default (debounceDuration = 100) => {
  const initialState = isBrowser() ? window.innerWidth : 0;
  const [windowWidth, setWindowWidth] = useState(initialState);

  useEffect(() => {
    const onResize = debounce(debounceDuration, () => {
      setWindowWidth(window.innerWidth);
    });

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [debounceDuration]);

  return windowWidth;
};
