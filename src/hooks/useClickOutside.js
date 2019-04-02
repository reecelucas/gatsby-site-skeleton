import { useEffect } from 'react';

/**
 * Usage:
 *
 * useClickOutside(myRef, event => {
 *   console.log(`${event.target} is outside of ${myRef.current}`);
 * });
 */
export default (elemRef, fn) => {
  useEffect(() => {
    const clickOutside = event => {
      if (
        event.target &&
        elemRef &&
        elemRef.current &&
        !elemRef.current.contains(event.target)
      ) {
        fn(event);
      }
    };

    document.addEventListener('click', clickOutside, true);

    return () => {
      document.removeEventListener('click', clickOutside, true);
    };
  });
};
