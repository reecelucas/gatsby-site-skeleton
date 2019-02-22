import { useState, useEffect } from 'react';
import debounce from '../helpers/debounce';
import isBrowser from '../helpers/isBrowser';

export default (debounceDuration = 100) => {
  const initialState = isBrowser() ? window.innerWidth : 0;
  const [windowWidth, setWindowWidth] = useState(initialState);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onResize = debounce(debounceDuration, () => {
    setWindowWidth(window.innerWidth);
  });

  return windowWidth;
};
