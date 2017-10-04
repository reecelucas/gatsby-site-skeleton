// check to see if Gatsby.js is rendering on the server
const serverRendered =
  typeof window === 'undefined' || typeof document === 'undefined';

export default serverRendered;
